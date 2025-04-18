import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltExportLightIcon],svg[lets-icons-arhive-alt-export-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M6.5 8.5L4.782 9.645c-.468.313-.703.469-.873.675a1.8 1.8 0 0 0-.331.62c-.078.256-.078.538-.078 1.101v3.579c0 1.008 0 1.512.196 1.897a1.8 1.8 0 0 0 .787.787c.385.196.889.196 1.897.196h11.24c1.008 0 1.512 0 1.897-.196a1.8 1.8 0 0 0 .787-.787c.196-.385.196-.889.196-1.897v-3.579c0-.563 0-.845-.078-1.1a1.8 1.8 0 0 0-.331-.62c-.17-.207-.405-.363-.873-.676L17.5 8.5"></svg:path><svg:path d="M20.5 12.5h-2.558c-.696 0-1.044 0-1.306.189c-.262.188-.372.518-.592 1.178l-.088.265c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189c-.262-.188-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5m6-7L12 3m0 0l2.5 2.5M12 3v7"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltExportLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
