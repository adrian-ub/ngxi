import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBookIcon],svg[ix-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M218.37 106.667L256 125.462l37.63-18.795h175.704v320H303.68L256 450.518l-47.7-23.851H42.667v-320zm-10.071 42.667H85.334V384H218.37l16.297 8.14V162.518zm218.368 0H303.68l-26.347 13.179V392.14l16.298-8.14h133.036zm-21.333 128v32H298.667v-32zm-192 0v32H106.667v-32zm192-85.334v32H298.667v-32zm-192 0v32H106.667v-32z"></svg:path>`,
})
export class IxBookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
