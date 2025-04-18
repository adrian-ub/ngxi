import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTokenOutlineIcon],svg[material-symbols-light-token-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21.423l-8.5-4.711V7.289L12 2.577l8.5 4.712v9.423zM9.196 9.866q.517-.639 1.248-1.002T12 8.5t1.556.364t1.248 1.001l4.115-2.29L12 3.723L5.08 7.575zm2.304 10.13v-4.505q-1.292-.235-2.146-1.214T8.5 12q0-.333.054-.628t.167-.603L4.5 8.404v7.71zM12 14.5q1.056 0 1.778-.722T14.5 12t-.722-1.778T12 9.5t-1.778.722T9.5 12t.722 1.778T12 14.5m.5 5.496l7-3.882v-7.71l-4.221 2.365q.113.308.167.603T15.5 12q0 1.298-.854 2.277T12.5 15.491z"></svg:path>`,
})
export class MaterialSymbolsLightTokenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
