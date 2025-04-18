import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPassportIcon],svg[devicon-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d5ff00" d="M64 0C35.602 0 12.598 22.913 12.598 51.2H38.3c0-14.132 11.515-25.601 25.7-25.601Zm0 0"></svg:path><svg:path fill="#35df79" d="M115.402 51.2C115.402 22.914 92.398 0 64 0v25.598c14.185 0 25.7 11.469 25.7 25.603zm0 0"></svg:path><svg:path fill="#00b9f1" d="M64 102.402c28.398 0 51.402-22.914 51.402-51.201H89.7c0 14.129-11.515 25.598-25.7 25.598Zm0 0"></svg:path><svg:path fill="#fff" d="M38.3 102.402V51.2H12.597V128H64v-25.598zm0 0"></svg:path>`,
})
export class DeviconPassportIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
