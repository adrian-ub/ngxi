import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faMaxcdnIcon],svg[fa-maxcdn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1745 517l-164 763h-334l178-832q13-56-15-88q-27-33-83-33h-169l-204 953H620l204-953H538l-204 953H0l204-953L51 0h1276q101 0 189.5 40.5T1664 154q60 73 81 168.5t0 194.5"></svg:path>`,
})
export class FaMaxcdnIcon {
  readonly viewBox = input("0 0 1760 1280")
  readonly width = input("1.38em")
  readonly height = input("1em")
}
