import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elGbpIcon],svg[el-gbp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M676.062 0q157.787.001 315.576 66.352L916.385 252.46q-127.04-51.785-220.094-51.787q-63.115.001-97.101 36.413q-33.986 35.606-33.984 102.765v156.17h303.438V673.23H565.206v115.71q-.001 137.56-122.186 200.675h580.985V1200H175.994V999.326q83.345-35.603 114.093-81.727q31.558-46.122 31.559-127.04V673.23H177.612V496.02h144.033V338.235q0-162.642 92.246-250.034Q506.945 0 676.062 0"></svg:path>`,
})
export class ElGbpIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
