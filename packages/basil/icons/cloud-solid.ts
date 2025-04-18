import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilCloudSolidIcon],svg[basil-cloud-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.932 4.708c-1.912 0-3.59.992-4.552 2.486A5.875 5.875 0 1 0 6.875 18.75h11.648a4.478 4.478 0 1 0-.19-8.951a5.41 5.41 0 0 0-5.401-5.09"></svg:path>`,
})
export class BasilCloudSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
