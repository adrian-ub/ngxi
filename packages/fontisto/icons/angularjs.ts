import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAngularjsIcon],svg[fontisto-angularjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.172 24l-9.468-5.244L0 3.984L11.172 0l11.172 3.984l-1.704 14.772zm0-21.348l-6.984 15.66h2.604l1.404-3.504h5.928l1.404 3.504h2.604zm2.04 9.996h-4.08l2.04-4.908z"></svg:path>`,
})
export class FontistoAngularjsIcon {
  readonly viewBox = input("0 0 22 24")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
