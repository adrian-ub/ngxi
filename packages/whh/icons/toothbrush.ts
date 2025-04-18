import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhToothbrushIcon],svg[whh-toothbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M999.46 998.5q-25 24.5-60 24.5t-59-25l-868-863q-12-12-12-29.5t12.5-30t30-12.5t29.5 12l29 29q4-7 7-10l83-83q11-11 27-11t27.5 11.5t11.5 27.5t-12 27l-82 83q-3 3-10 7l12 12q4-7 7-10l83-83q11-11 27-11t27.5 11.5t11.5 27.5t-12 27l-82 83q-3 3-10 6l12 13q4-7 7-10l83-83q11-11 27-11t27.5 11.5t11.5 27.5t-12 27l-82 83q-3 3-10 6l60 60q56 56 106.5 97.5t86.5 64t76.5 47.5t76.5 47.5t86.5 64t106.5 96.5l119 119q25 25 25 60t-25 59.5"></svg:path>`,
})
export class WhhToothbrushIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
