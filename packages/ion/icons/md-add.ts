import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdAddIcon],svg[ion-md-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z" fill="currentColor"></svg:path>`,
})
export class IonMdAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
