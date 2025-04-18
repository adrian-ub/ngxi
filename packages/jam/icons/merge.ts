import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMergeIcon],svg[jam-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2M7 5.83a3.001 3.001 0 1 1 2.033-.013v2.028q0 .111-.008.221a1 1 0 0 0 .462.637l3.086 1.846a3 3 0 0 1 1.46 2.575v1.059a3.001 3.001 0 1 1-2-.024v-1.035a1 1 0 0 0-.487-.858L8.46 10.42a3 3 0 0 1-.444-.324a3 3 0 0 1-.443.324l-3.086 1.846a1 1 0 0 0-.487.858v1.047a3.001 3.001 0 1 1-2 0v-1.047a3 3 0 0 1 1.46-2.575l3.086-1.846a1 1 0 0 0 .462-.637A3 3 0 0 1 7 7.845V5.829zM3 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamMergeIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
