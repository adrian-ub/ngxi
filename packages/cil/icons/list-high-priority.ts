import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilListHighPriorityIcon],svg[cil-list-high-priority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 416h240v32H256zm0-106.667h240v32H256zm0-106.666h240v32H256zM328 96h168v32H328z"></svg:path><svg:path fill="currentColor" d="M302 111L167.2 27.216V96h-5.965C121.783 96 84.91 114.755 57.4 148.81C30.7 181.866 16 225.616 16 272s14.7 90.134 41.4 123.19C84.91 429.245 121.783 448 161.231 448H216v-32h-54.769C98.8 416 48 351.4 48 272s50.8-144 113.231-144h5.969v69.228ZM199.2 84.784l42.8 26.607l-42.8 27.381Z"></svg:path>`,
})
export class CilListHighPriorityIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
