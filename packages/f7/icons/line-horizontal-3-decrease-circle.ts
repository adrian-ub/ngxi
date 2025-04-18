import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7LineHorizontal3DecreaseCircleIcon],svg[f7-line-horizontal-3-decrease-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m0-3.984C16.937 47.922 8.1 39.062 8.1 28c0-11.04 8.813-19.922 19.876-19.922c11.039 0 19.921 8.883 19.945 19.922c.023 11.063-8.883 19.922-19.922 19.922M15.227 23.5h25.57c1.031 0 1.758-.656 1.758-1.64c0-1.008-.727-1.665-1.758-1.665h-25.57c-1.032 0-1.782.657-1.782 1.664c0 .985.75 1.641 1.781 1.641m3.468 7.758h18.633c1.031 0 1.758-.656 1.758-1.64c0-1.009-.727-1.665-1.758-1.665H18.695c-1.031 0-1.758.656-1.758 1.664c0 .985.727 1.64 1.758 1.64m3.633 7.781h11.367c1.032 0 1.782-.656 1.782-1.64c0-1.008-.75-1.665-1.782-1.665H22.328c-1.031 0-1.781.657-1.781 1.664c0 .985.75 1.641 1.781 1.641"></svg:path>`,
})
export class F7LineHorizontal3DecreaseCircleIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
