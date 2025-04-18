import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBrightness1Icon],svg[tdesign-brightness-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .086l3.49 3.49h4.935V8.51l3.49 3.49l-3.49 3.49v4.934H15.49L12 23.914l-3.49-3.49H3.577V15.49L.086 12l3.49-3.49V3.575H8.51zm0 2.828L9.34 5.575H5.576V9.34L2.914 12l2.662 2.662v3.763h3.763L12 21.086l2.661-2.661h3.764V14.66l2.66-2.66l-2.66-2.661V5.575H14.66zM12.065 8A9 9 0 0 1 13 12a9 9 0 0 1-.936 4a4 4 0 0 0 0-8m-1.939-1.7a6 6 0 1 1 0 11.402l-1.314-.432l.823-1.113A6.96 6.96 0 0 0 11 12a6.96 6.96 0 0 0-1.367-4.157L8.81 6.731z"></svg:path>`,
})
export class TdesignBrightness1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
