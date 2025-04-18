import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSwallowIcon],svg[icon-park-twotone-swallow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSwallow0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8.999 33.314L24.034 6.942Q25.42 4 29.04 4c3.62 0 5.977 4.986 5.977 4.986L39 9.58q-6.016.098-6.957 2.42c-.94 2.322 2.456 4.73 2.975 8.004s-1.55 8.801-6.529 11.563Q23.51 34.329 16.058 33l-6.1 11"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M18.942 27.978q3.87-6.974 5.087-8.957c1.219-1.982 6.246-1.384 4.44 3.563q-1.806 4.947-9.527 5.394Z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSwallow0)"></svg:path>`,
})
export class IconParkTwotoneSwallowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
