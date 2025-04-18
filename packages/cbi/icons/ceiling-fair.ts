import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiCeilingFairIcon],svg[cbi-ceiling-fair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.415 12.888v-3.54c0-2.343-7.467-2.962-11.415-2.962S.585 7.006.585 9.348v3.444a1.3 1.3 0 0 0 .04.794c.408 2.18 7.54 2.768 11.375 2.768c3.86 0 11.064-.596 11.385-2.812l.018-.044a1.8 1.8 0 0 0 .012-.61M12 15.354c-6.739 0-10.415-1.296-10.415-1.962c0-.516 2.217-1.408 6.348-1.784a145 145 0 0 1 5.51-.155c5.816.168 8.972 1.323 8.972 1.94c0 .665-3.676 1.961-10.415 1.961m.024-2.525c-.22 0-2.154.022-2.154.79s1.934.788 2.154.788s2.156-.022 2.156-.789s-1.935-.789-2.156-.789"></svg:path>`,
})
export class CbiCeilingFairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
