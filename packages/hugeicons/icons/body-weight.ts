import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBodyWeightIcon],svg[hugeicons-body-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.002 14.003v-1.64m0 1.64q-2.5 0-4.999-.546m4.999.546q2.5 0 5-.546m-9.999 0a26 26 0 0 1-3.824-1.158c-.51-.196-.765-.295-.94-.52c-.29-.374-.237-.895-.237-1.34c0-1.233 0-2.851.3-3.173c.57-.61 1.657-.048 2.29.157q7.41 2.403 14.82 0c.632-.205 1.72-.766 2.289-.157c.3.322.3 1.94.3 3.173c0 .618 0 .927-.135 1.183c-.21.392-.65.527-1.041.678a26 26 0 0 1-3.823 1.156m-9.999 0l-.001-1.641m10 1.642v-1.642m2 7.195q-7 2.003-14 0"></svg:path><svg:path d="M19.19 2.998c-.576 1.311-1.107 3.559-1.107 4.59M4.816 2.997c.577 1.311 1.107 3.559 1.107 4.59M5.4 15.51c-.44 1.381-1.599 4.111-1.395 5.492m14.61-5.492c.439 1.381 1.598 4.111 1.395 5.492"></svg:path></svg:g>`,
})
export class HugeiconsBodyWeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
