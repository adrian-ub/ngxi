import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7BubbleMiddleBottomFillIcon],svg[f7-bubble-middle-bottom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.953 52.363c1.055 0 2.04-.445 2.977-2.062l4.336-7.242h7.828c6.984 0 10.734-3.868 10.734-10.735V14.371c0-6.867-3.75-10.734-10.734-10.734H12.906c-6.96 0-10.734 3.844-10.734 10.734v17.953c0 6.89 3.773 10.735 10.734 10.735h7.735l4.336 7.242c.937 1.617 1.921 2.062 2.976 2.062"></svg:path>`,
})
export class F7BubbleMiddleBottomFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
