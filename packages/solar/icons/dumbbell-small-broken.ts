import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellSmallBrokenIcon],svg[solar-dumbbell-small-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M15.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C18.197 7 17.964 7 17.5 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06c-.052.192-.052.424-.052.889Zm-11 0v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.192.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.196 7 6.964 7 6.5 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C4.5 8.304 4.5 8.536 4.5 9Z"></svg:path><svg:path fill="currentColor" d="M2 12h-.75zm20 0h-.75zm-11 .75a.75.75 0 0 0 0-1.5zm3-1.5a.75.75 0 0 0 0 1.5zm-10 2c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 14.75zm16 1.5A2.75 2.75 0 0 0 22.75 12h-1.5c0 .69-.56 1.25-1.25 1.25zm0-4c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 9.25zM4 9.25A2.75 2.75 0 0 0 1.25 12h1.5c0-.69.56-1.25 1.25-1.25zm0 1.5h1v-1.5H4zm1 2.5H4v1.5h1zm15 0h-1v1.5h1zm-1-2.5h1v-1.5h-1zm-10 2h2v-1.5H9zm5 0h1v-1.5h-1z"></svg:path></svg:g>`,
})
export class SolarDumbbellSmallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
