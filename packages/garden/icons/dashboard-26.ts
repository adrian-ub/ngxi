import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDashboard26Icon],svg[garden-dashboard-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.027 21H5.973C5.436 21 5 20.523 5 19.935v-2.87c0-.59.436-1.065.973-1.065h5.054c.537 0 .973.476.973 1.065v2.87c0 .588-.436 1.065-.973 1.065m-.003-7H5.977c-.54 0-.977-.423-.977-.945v-7.11c0-.52.438-.945.977-.945h5.047c.54 0 .976.424.976.946v7.11c0 .521-.437.944-.976.944m3.955-9h5.042c.54 0 .979.478.979 1.069v2.863c0 .59-.439 1.068-.979 1.068h-5.042c-.54 0-.979-.478-.979-1.068V6.07c0-.59.439-1.069.979-1.069M14.972 12h5.056c.537 0 .972.42.972.94v7.12c0 .519-.435.94-.972.94h-5.056c-.537 0-.972-.421-.972-.94v-7.12c0-.52.435-.94.972-.94"></svg:path>`,
})
export class GardenDashboard26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
