import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationPageIcon],svg[foundation-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80.277 12.498h-.005v-4.02a1.73 1.73 0 0 0-1.73-1.73h-32.87l-25.95 25.95v58.819c0 .956.774 1.73 1.73 1.73h57.09a1.73 1.73 0 0 0 1.73-1.73v-2.448h.005zM29.679 83.292V36.158h17.723a1.73 1.73 0 0 0 1.73-1.73V16.705H70.32v66.587z"></svg:path>`,
})
export class FoundationPageIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
