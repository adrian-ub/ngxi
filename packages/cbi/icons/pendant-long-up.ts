import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPendantLongUpIcon],svg[cbi-pendant-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.353 6c.706 0 .706.235.706.235v3.059l8.47 2.824c.236 0 .471.235.471.706v2.823a.51.51 0 0 1-.471.471L17.294 18h-.47c-3.059-.941.235 0-14.353-4.706c-.236 0-.471-.235-.471-.706V9.529a.506.506 0 0 1 .471-.47l4.47-1.647h.471l4.47 1.412V6.235s0-.235.471-.235M7.176 8.588l-2.823.941s-.235.236 0 .236L16.824 14h.47l2.353-.941s.235-.235 0-.235l-6.588-2.118v.706s0 .235-.471.235c-.706 0-.706-.235-.706-.235v-1.177z"></svg:path>`,
})
export class CbiPendantLongUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
