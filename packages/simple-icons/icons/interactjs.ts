import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsInteractjsIcon],svg[simple-icons-interactjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.382.01C12.255.006 12.128 0 12 0A11.999 11.999 0 0 0 1.804 18.327l9.911-17.17zm7.097 19.686L11.201 5.121L2.788 19.689l.007.007zm.184 1.538H4.337a12 12 0 0 0 15.326 0m2.917-3.568A12 12 0 0 0 12.382.01l.667 1.148zM12.383.009l-.001.001h.001z"></svg:path>`,
})
export class SimpleIconsInteractjsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
