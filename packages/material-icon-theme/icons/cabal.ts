import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCabalIcon],svg[material-icon-theme-cabal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="translate(0 -822.52)"><svg:rect width="107.25" height="156.59" x="405.55" y="967.22" fill="#0097A7" rx="12.306" ry="12.31" transform="matrix(-.98339 .18149 .60192 .79856 0 0)"></svg:rect><svg:rect width="108.34" height="123.15" x="-1156.5" y="1461.9" fill="#3F51B5" rx="10.69" ry="12.31" transform="matrix(-.98528 .17093 -.59175 .80612 0 0)"></svg:rect><svg:path fill="#3F51B5" d="M52.112 965.158c-1.343 3.515-26.292 23.248-25.744 27.277c.548 4.03 29.812 16.023 32.04 19.027s10.545 41.668 13.603 42.5s18.828-31.274 21.548-32.932s32.808 2.503 34.15-1.01c1.343-3.515-18.174-35.352-18.721-39.381s9.732-40.12 7.502-43.125s-30.06 9.427-33.118 8.594s-26.793-27.3-29.514-25.643s-.405 41.177-1.747 44.693z"></svg:path></svg:g>`,
})
export class MaterialIconThemeCabalIcon {
  readonly viewBox = input("0 0 300 300")
  readonly width = input("1em")
  readonly height = input("1em")
}
