import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhStoveIcon],svg[whh-stove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.06 1024h-896q-26 0-45-19t-19-45V64q0-26 19-45t45-19h896q26 0 45 18.5t19 45.5v896q0 27-19 45.5t-45 18.5m-672-896q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m0 448q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m448-448q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m0 448q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m0 256q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28m0-448q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28m-448 448q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28m0-448q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhStoveIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
