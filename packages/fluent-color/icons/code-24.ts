import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCode24Icon],svg[fluent-color-code-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCode240)" d="m8.086 18.61l5.996-14.004a1 1 0 0 1 1.878.678l-.04.11l-5.996 14.004a1 1 0 0 1-1.878-.677zl5.996-14.005zm-5.793-7.317l4-4a1 1 0 0 1 1.497 1.32l-.083.094L4.414 12l3.293 3.293a1 1 0 0 1-1.32 1.497l-.094-.083l-4-4a1 1 0 0 1-.083-1.32zl4-4zm14-4.001a1 1 0 0 1 1.32-.083l.093.083l4.001 4a1 1 0 0 1 .083 1.321l-.083.095l-4.001 3.995a1 1 0 0 1-1.497-1.32l.084-.095l3.292-3.289l-3.293-3.293a1 1 0 0 1 0-1.414"></svg:path><svg:defs><svg:lineargradient id="fluentColorCode240" x1="2.588" x2="20.693" y1="2.933" y2="22.309" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C76EFB"></svg:stop><svg:stop offset="1" stop-color="#8B52F4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCode24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
