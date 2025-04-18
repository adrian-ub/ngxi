import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLowIncomeLevel24pxIcon],svg[healthicons-low-income-level-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="2" d="M8.596 14.628a1.75 1.75 0 0 0-.421 1.83a3.07 3.07 0 0 0 1.575 1.747V19h3.379l.506.454l.393.352a17 17 0 0 1-2.672.193c-2.772 0-4.556-.502-5.653-1.205c-1.056-.677-1.545-1.581-1.67-2.625c-.13-1.087.133-2.372.708-3.707c.489-1.136 1.182-2.258 1.966-3.248a18 18 0 0 0 3.043.48v.351a3.062 3.062 0 0 0-1.154 4.583Zm6.404.81c0-.68-.221-1.308-.596-1.816a1.75 1.75 0 0 0 .421-1.83a3.07 3.07 0 0 0-1.575-1.747V9.65c.925-.093 1.83-.251 2.692-.474c.927 1.146 1.726 2.489 2.216 3.824h-2.55v2.754l-.914 1.02A3.05 3.05 0 0 0 15 15.437ZM7.015 5.934l-.14-.205q.185.155.376.275zm8.432.011c-1.703.517-3.73.69-5.65.517c.33-.037.635-.094.895-.143l.122-.023c.31-.058.57-.105.81-.133c1.388-.156 2.847-.25 3.823-.218Zm.248-.078l-.228.072l.153-1.051q.31.128.571.253zM13.25 18.205q.165-.078.318-.175l-.01.012l-.308.343z"></svg:path>`,
})
export class HealthiconsLowIncomeLevel24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
