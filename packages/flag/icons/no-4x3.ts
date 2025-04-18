import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagNo4x3Icon],svg[flag-no-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed2939" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" d="M180 0h120v480H180z"></svg:path><svg:path fill="#fff" d="M0 180h640v120H0z"></svg:path><svg:path fill="#002664" d="M210 0h60v480h-60z"></svg:path><svg:path fill="#002664" d="M0 210h640v60H0z"></svg:path>`,
})
export class FlagNo4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
