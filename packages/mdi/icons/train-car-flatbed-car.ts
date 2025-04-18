import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarFlatbedCarIcon],svg[mdi-train-car-flatbed-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 13v-3c0-1.11-.89-2-2-2h-2l-3-4H6L3 8c-1.11 0-2 .89-2 2v3h2c0 .77.3 1.47.78 2H1v2h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1v-2h-2.78c.48-.53.78-1.23.78-2zm-3.5 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5M12 5.5h3.25L17.14 8H12zm3.78 9.5H8.22c.48-.53.78-1.23.78-2h6c0 .77.3 1.47.78 2M6.75 5.5h3.75V8H4.86zm-.75 6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MdiTrainCarFlatbedCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
