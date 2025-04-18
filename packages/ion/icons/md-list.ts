import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdListIcon],svg[ion-md-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80 280h256v48H80z" fill="currentColor"></svg:path><svg:path d="M80 184h320v48H80z" fill="currentColor"></svg:path><svg:path d="M80 88h352v48H80z" fill="currentColor"></svg:path><svg:g><svg:path d="M80 376h288v48H80z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonMdListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
