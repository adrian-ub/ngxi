import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrickOutlineRoundedIcon],svg[material-symbols-light-brick-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18.077V9.635q0-.385.27-.654t.653-.27h1.904V5.924q0-.385.27-.654T6.75 5h2.942q.385 0 .654.27t.27.653v2.789h2.768V5.923q0-.385.27-.654T14.308 5h2.942q.385 0 .654.27t.269.653v2.789h1.904q.384 0 .654.269t.269.654v8.442q0 .385-.27.654t-.653.269H3.923q-.385 0-.654-.27T3 18.078M4 18h16V9.712H4zm2.827-9.288h2.789V6H6.827zm7.558 0h2.788V6h-2.788zM4 18h16zm2.827-9.288h2.789zm7.558 0h2.788z"></svg:path>`,
})
export class MaterialSymbolsLightBrickOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
