import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChestIcon],svg[icon-park-outline-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M16.997 3.5v5.149c0 1.75-.964 2.425-4.595 3.358c-3.63.932-4.706 1.482-5.554 3.093Q6 16.71 6 20.072V37.5"></svg:path><svg:path stroke-linejoin="round" d="M34.942 21.509q.356 4.314-1.463 7.537t-6.422 3.926M13.059 21.509q-.359 4.314 1.469 7.537q1.827 3.222 6.474 3.926"></svg:path><svg:path d="M13 43.512q2-2.333 2-5.072v-8.364m20 13.436q-2-2.333-2-5.072v-8.364M31 3.5v5.149c0 1.75.964 2.425 4.595 3.358c3.63.932 4.706 1.482 5.554 3.093q.848 1.61.848 4.972V37.5"></svg:path></svg:g>`,
})
export class IconParkOutlineChestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
