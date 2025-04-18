import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneCryingFaceIcon],svg[emojione-crying-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:path fill="#664e27" d="M40.6 46.4c-5.4-2.5-11.8-2.5-17.2 0c-1.3.6.3 4.2 1.7 3.5c3.6-1.7 8.9-2.3 13.9 0c1.3.6 3-2.8 1.6-3.5"></svg:path><svg:path fill="#fff" d="M54 31c0 5-4 9-9 9s-9-4-9-9s4-9 9-9s9 4 9 9"></svg:path><svg:circle cx="45" cy="31" r="6" fill="#664e27"></svg:circle><svg:g fill="#fff"><svg:ellipse cx="46.6" cy="35.5" rx="2.8" ry="3.2"></svg:ellipse><svg:ellipse cx="42.8" cy="31" rx="1.6" ry="1.9"></svg:ellipse><svg:path d="M28 31c0 5-4 9-9 9s-9-4-9-9s4-9 9-9s9 4 9 9"></svg:path></svg:g><svg:circle cx="19" cy="31" r="6" fill="#664e27"></svg:circle><svg:g fill="#fff"><svg:ellipse cx="20.6" cy="35.5" rx="2.8" ry="3.2"></svg:ellipse><svg:ellipse cx="16.8" cy="31" rx="1.6" ry="1.9"></svg:ellipse></svg:g><svg:path fill="#65b1ef" d="M47 36c-5.1 6.8-8 13-8 18.1c0 4.4 3.6 7.9 8 7.9s8-3.5 8-7.9c0-5.1-3-11.4-8-18.1"></svg:path><svg:path fill="#917524" d="M53.2 20.7c-3.2-2.7-7.5-3.9-11.7-3.1c-.6.1-1.1-2-.4-2.2c4.8-.9 9.8.5 13.5 3.6c.6.5-1 2.1-1.4 1.7m-30.7-3.3c-4.2-.7-8.5.4-11.7 3.1c-.4.4-2-1.2-1.4-1.7c3.7-3.2 8.7-4.5 13.5-3.6c.7.2.2 2.3-.4 2.2"></svg:path>`,
})
export class EmojioneCryingFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
