import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiActivityIcon],svg[mynaui-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12h-2.962c-.21 0-.316 0-.405.042a.5.5 0 0 0-.201.173c-.061.088-.092.205-.155.44l-1.817 6.846c-.233.875-.349 1.313-.524 1.426a.435.435 0 0 1-.485-.002c-.175-.115-.288-.554-.514-1.43l-3.873-14.99c-.227-.876-.34-1.315-.515-1.43a.435.435 0 0 0-.485-.002c-.175.113-.291.55-.524 1.426l-1.817 6.845c-.063.236-.094.353-.154.44a.5.5 0 0 1-.202.174C6.278 12 6.173 12 5.962 12H3"></svg:path>`,
})
export class MynauiActivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
