import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconReachIcon],svg[devicon-reach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#6AC6E7" d="m65.73 21.566l26.743 27.059c-.407.43-.746.8-1.098 1.152c-9.516 9.551-19.04 19.09-28.543 28.649a8857 8857 0 0 0-29.543 29.808c-.922.938-1.406.914-2.312-.007c-5.489-5.61-11.055-11.145-16.579-16.72c-3.664-3.695-7.3-7.413-10.945-11.128c-.262-.266-.496-.563-.765-.871C22.945 59.44 43.145 39.434 63.628 19.14c.442.507 1.24 1.433 2.102 2.425m0 0"></svg:path><svg:path fill="#F45848" d="M117.637 73.336c2.867 2.809 5.668 5.555 8.16 8c-9.309 9.668-18.469 19.18-27.578 28.637c-16.762-12.336-17.43-44.176-1.11-56.934c6.829 6.75 13.645 13.492 20.528 20.297m0 0"></svg:path>`,
})
export class DeviconReachIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
