import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAddCollectionIcon],svg[marketeq-add-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 14.583v12.5m-6.25-6.25h12.5z"></svg:path><svg:path stroke="#306CFE" d="M14.583 43.75h27.084a2.083 2.083 0 0 0 2.083-2.083v-31.25"></svg:path><svg:path stroke="#306CFE" d="M33.333 6.25h-25c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.084 2.083 2.084h25c1.15 0 2.084-.933 2.084-2.084v-25c0-1.15-.933-2.083-2.084-2.083"></svg:path></svg:g>`,
})
export class MarketeqAddCollectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
