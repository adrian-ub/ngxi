import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elLaptopAltIcon],svg[el-laptop-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M289.966 323.877h620.068v405.835H289.966zm76.904 73.975v257.959h466.26V397.852zM212.256 766.626h775.488v68.628l-39.404 40.869H251.66l-39.404-40.869zm315.82 22.485v62.183h143.848v-62.183z"></svg:path>`,
})
export class ElLaptopAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
