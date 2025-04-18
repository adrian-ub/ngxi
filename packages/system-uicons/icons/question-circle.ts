import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsQuestionCircleIcon],svg[system-uicons-question-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9.5v-1l1.414-1.414a2 2 0 0 0 .586-1.414V5.5c0-.613-.346-1.173-.894-1.447l-.212-.106a2 2 0 0 0-1.788 0L7.5 4c-.613.306-1 .933-1 1.618V6.5"></svg:path><svg:circle cx="8.5" cy="12.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsQuestionCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
