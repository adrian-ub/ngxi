import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatChairIcon],svg[fluent-emoji-flat-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#7D4533" d="M13 8h-2v7h2zm8 0h-2v7h2zM6.79 28.38l1.58-7.795h2.82L8.597 28.38c-.756 2.464-2.097 1.48-1.805 0m16.838-7.795l1.58 7.795c.291 1.48-1.05 2.464-1.806 0l-2.595-7.795z"></svg:path><svg:path fill="#402A32" d="m11 20.595l.122 5.387c.044 1.533 1.293 1.334 1.351 0l.537-5.387zm10 0l-.121 5.387c-.044 1.533-1.294 1.334-1.351 0l-.537-5.387z"></svg:path><svg:path fill="#A56953" d="M11 3a2 2 0 0 0-2 2v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a2 2 0 0 0-2-2zm0 11c-2 0-4 3.5-4 5.25c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0 0 25 19.25C25 17.5 23 14 21 14z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatChairIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
