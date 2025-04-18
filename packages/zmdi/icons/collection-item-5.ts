import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionItem5Icon],svg[zmdi-collection-item-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 342V48H128v299zM43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zm298 170q0 18-12.5 30.5T299 304h-86v-43h86v-42h-86V91h128v42h-85v43h43q17 0 29.5 12.5T341 219z"></svg:path>`,
})
export class ZmdiCollectionItem5Icon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
