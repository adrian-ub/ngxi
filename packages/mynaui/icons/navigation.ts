import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiNavigationIcon],svg[mynaui-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.54 3.333a.485.485 0 0 1 .92 0l6.5 16.916c.178.464-.272.917-.685.69l-6.05-3.314a.46.46 0 0 0-.45 0l-6.05 3.315c-.413.226-.863-.227-.685-.69z"></svg:path>`,
})
export class MynauiNavigationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
