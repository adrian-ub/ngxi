import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibAnalogueIcon],svg[cib-analogue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.292 17.073c-9.131-.573-9.989 13.12-.86 13.692c9.131.573 9.989-13.12.86-13.692m23.787 3.416L21.932 4.645c-4.577-7.921-16.459-1.057-11.88 6.865l9.145 15.839a6.87 6.87 0 0 0 9.376 2.515a6.86 6.86 0 0 0 2.505-9.375z"></svg:path>`,
})
export class CibAnalogueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
