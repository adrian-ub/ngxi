import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibSketchIcon],svg[cib-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.719 10.137L.563 11.693h5.656l.431-8.169zm23.05-7.281L16.731 2l8.481 9.2zM7.012 13.644l-.7-1.375H.618l14.056 16.356zm.125-1.95h17.75l-8.869-9.631zm18.582.568L17.35 28.625L31.4 12.269h-5.681zm.243-7.949l-.587-.788l.056 1.081l.381 7.088h5.644zM7.094 5.844l-.288 5.35L15.294 2l-8.037.856zm17.981 6.418H6.95L16.019 30z"></svg:path>`,
})
export class CibSketchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
