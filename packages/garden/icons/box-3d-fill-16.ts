import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBox3dFill16Icon],svg[garden-box-3d-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.47 3.42l-6-3.23a1 1 0 0 0-.95 0l-6 3.23c-.32.17-.52.51-.52.88v7.4c0 .37.2.71.53.88l6 3.23a1 1 0 0 0 .95 0l6-3.23c.32-.17.52-.51.52-.88V4.3c0-.37-.2-.71-.53-.88m-.67 1.63L8.5 7.94v6.56c0 .28-.22.5-.5.5s-.5-.22-.5-.5V7.94L2.2 5.05a.637.637 0 0 1-.25-.85c.17-.3.55-.41.85-.25L8 6.79l5.2-2.84c.3-.17.68-.05.85.25c.16.3.05.68-.25.85"></svg:path>`,
})
export class GardenBox3dFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
