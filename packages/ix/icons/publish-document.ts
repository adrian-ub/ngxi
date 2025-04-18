import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPublishDocumentIcon],svg[ix-publish-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m213.334 85.333l85.333 85.334v256h-256V85.333zM195.66 128H85.334v256H256V188.34zM384 33.83l89.75 89.752l-30.169 30.17l-38.249-38.239V256c0 45.7-35.924 83.01-81.074 85.229l-4.259.104v-42.666c22.493 0 40.921-17.406 42.55-39.483l.117-3.184l-.001-140.486l-38.247 38.238l-30.17-30.17z"></svg:path>`,
})
export class IxPublishDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
