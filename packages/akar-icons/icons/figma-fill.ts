import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsFigmaFillIcon],svg[akar-icons-figma-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#akarIconsFigmaFill0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M8.415 0C5.968 0 4 2.053 4 4.568c0 1.529.728 2.887 1.847 3.716A4.61 4.61 0 0 0 4 12c0 1.53.728 2.887 1.847 3.716A4.61 4.61 0 0 0 4 19.432C4 21.947 5.968 24 8.415 24s4.415-2.053 4.415-4.568V15.57a4.3 4.3 0 0 0 2.755.999C18.032 16.568 20 14.515 20 12a4.61 4.61 0 0 0-1.847-3.716A4.61 4.61 0 0 0 20 4.568C20 2.053 18.032 0 15.585 0zM5.659 4.568c0-1.591 1.242-2.865 2.756-2.865h2.755v5.73H8.415c-1.514 0-2.756-1.275-2.756-2.865m9.926 2.864H12.83v-5.73h2.755c1.515 0 2.756 1.275 2.756 2.866c0 1.59-1.241 2.864-2.756 2.864M5.66 12c0-1.59 1.242-2.865 2.756-2.865h2.755v5.73H8.415C6.9 14.865 5.659 13.59 5.659 12m7.17 0c0-1.59 1.242-2.865 2.756-2.865c1.515 0 2.756 1.274 2.756 2.865c0 1.59-1.241 2.865-2.756 2.865S12.83 13.59 12.83 12m-7.17 7.432c0-1.59 1.242-2.864 2.756-2.864h2.755v2.864c0 1.591-1.24 2.865-2.755 2.865S5.66 21.023 5.66 19.432" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="akarIconsFigmaFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class AkarIconsFigmaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
