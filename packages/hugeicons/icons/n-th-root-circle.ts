import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNThRootCircleIcon],svg[hugeicons-n-th-root-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M17.505 8.485h-5.251c-.817 0-.77.154-.93.978l-1.31 5.05c-.332 1.328-.725.958-.725.958c-.36-.12-.415-.261-1.025-1.514l-.41-.883c-.263-.54-.592-.476-.772-.394c0 0-.277.1-.584.3m6.499-1.474c.42-.014.867-.037 1.093.418c.343.692.86 1.889 1.061 2.339c.101.173.417.227.417.227c.27.035.573.023.573.023m.192-3.007c-.846 0-1.345.975-1.82 1.568c-.608.907-1.053 1.416-1.709 1.44"></svg:path></svg:g>`,
})
export class HugeiconsNThRootCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
