import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHtml5Icon],svg[la-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.219 4l.093 1.094l1.75 19.781l.063.688l.656.187l7.938 2.219l.25.062l.281-.062l7.938-2.188l.656-.187l.062-.688l1.782-19.812l.093-1.063h-1.093L6.313 4zm2.187 2l17.188.031l-1.625 18L16 25.97l-7-1.94zm2.407 3l.656 7.469h8.562l-.281 3.218l-2.75.75h-.031l-2.75-.75l-.156-2.062h-2.5l.343 3.969L15.97 23H16l5.063-1.406L21.75 14h-9.031l-.219-2.531h9.469L22.187 9z"></svg:path>`,
})
export class LaHtml5Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
