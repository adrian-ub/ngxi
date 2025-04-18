import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTidalLogoFillIcon],svg[ph-tidal-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.66 101.66l-36 36a8 8 0 0 1-11.32 0l-36-36l-.34-.38l-.34.38L135.31 136l34.35 34.34a8 8 0 0 1 0 11.32l-36 36a8 8 0 0 1-11.32 0l-36-36a8 8 0 0 1 0-11.32L120.69 136l-34.35-34.34l-.34-.38l-.34.38l-36 36a8 8 0 0 1-11.32 0l-36-36a8 8 0 0 1 0-11.32l36-36a8 8 0 0 1 11.32 0l36 36l.34.38l.34-.38l36-36a8 8 0 0 1 11.32 0l36 36l.34.38l.34-.38l36-36a8 8 0 0 1 11.32 0l36 36a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhTidalLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
