import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconLineTensorflowIcon],svg[devicon-line-tensorflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m61.583 127.143l-21.549-12.51V40.858L7.573 59.616l.079-27.942L61.582.85zM66.427.85v126.293l21.549-12.51v-35.53l16.27 9.402l-.099-24.301l-16.171-9.235v-14.11l32.451 18.757l-.079-27.942z"></svg:path><svg:path fill="currentColor" d="M62.076 0L7.158 31.387l-.082 29.086l32.465-18.758v73.201L62.076 128V0zm3.858 0v128l22.535-13.084V79.957l16.273 9.406l-.103-25.447l-16.17-9.234V41.715l32.455 18.758l-.082-29.086L65.934 0zM61.09 1.701v124.586l-20.563-11.94V40.005L8.068 58.76l.077-26.8L61.09 1.702zm5.83 0l52.935 30.26l.077 26.799l-32.45-18.756v15.252l16.172 9.234l.094 23.158l-16.266-9.4v36.1l-20.562 11.94V1.7z"></svg:path>`,
})
export class DeviconLineTensorflowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
