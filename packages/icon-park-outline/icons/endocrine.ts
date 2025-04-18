import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEndocrineIcon],svg[icon-park-outline-endocrine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.147 44C31.293 44 40 43.01 40 30.18q0-9.324-4.474-15.18q-4.18 7-6.196 7c-2.016 0 0-6.09-2.331-10.709Q24.668 6.671 18.729 4q.825 6.655-.357 9.655c-1.184 3-11.22 8.255-10.314 17.28S15 44 23.147 44Z" clip-rule="evenodd"></svg:path><svg:path d="M21.708 24.008Q16 29.196 16.843 33.611c.483 2.534 2.406 3.765 3.854 4.163c1.123.307 3.067.48 4.803-1.067c1.84-1.639 1.107-3.968-1.56-6.85q-1.689-1.823-2.232-5.849Z"></svg:path></svg:g>`,
})
export class IconParkOutlineEndocrineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
