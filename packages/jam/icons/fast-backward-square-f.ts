import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFastBackwardSquareFIcon],svg[jam-fast-backward-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.08 11.6l2.543 2.763a1.9 1.9 0 0 0 2.829.011c.207-.222.365-.488.465-.778l.706.767a1.9 1.9 0 0 0 2.829.011c.378-.405.59-.955.59-1.53V7.156c0-1.19-.895-2.156-2-2.156c-.546 0-1.069.241-1.446.667l-.671.758C11.647 5.595 10.909 5 10.043 5c-.547 0-1.07.241-1.447.667L6.08 8.51V6a1 1 0 1 0-2 0v8a1 1 0 0 0 2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m10.043 12.844l-2.141-2.326l.004-.948l2.137-2.414zm-4 0l-2.567-2.788l2.567-2.9z"></svg:path>`,
})
export class JamFastBackwardSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
