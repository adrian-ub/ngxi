import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixConnectorIcon],svg[ix-connector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M245.333 64c53.02 0 96 42.98 96 96c0 51.504-40.56 93.536-91.48 95.896l-4.52.104h-64C151.878 256 128 279.878 128 309.333c0 28.277 22.006 51.414 49.827 53.22l3.506.114l77.356-.001c9.36-36.368 42.094-63.353 81.233-63.988l1.411-.011h64v32h64v32h-64v42.666h64v32h-64v32h-64c-39.761 0-73.171-27.194-82.644-63.999h-77.356c-53.019 0-96-42.981-96-96c0-51.505 40.56-93.536 91.481-95.896l4.52-.105h64c29.455 0 53.333-23.878 53.333-53.333c0-28.277-22.006-51.414-49.827-53.22l-3.507-.113H64V64zm117.334 277.333h-21.334l-3.184.117c-21.856 1.613-39.134 19.69-39.477 41.876l-.005.674l.117 3.184c1.612 21.857 19.69 39.134 41.876 39.477l.673.006h21.334z"></svg:path>`,
})
export class IxConnectorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
