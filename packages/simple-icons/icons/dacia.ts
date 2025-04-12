import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDaciaIcon],svg[simple-icons-dacia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8.646v2.23h8.252v2.248H0v2.23h9.112a.62.62 0 0 0 .489-.201L12 12.819l2.399 2.334a.62.62 0 0 0 .49.201H24v-2.23h-8.252v-2.248H24v-2.23h-9.112a.62.62 0 0 0-.489.201L12 11.181L9.601 8.847a.62.62 0 0 0-.49-.201Z"></svg:path>`
})
export class SimpleIconsDaciaIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
