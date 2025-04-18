import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileCorruptIcon],svg[hugeicons-file-corrupt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 22c-.87.001-1.542-.01-2.093-.052c-1.309-.098-2.744-.454-3.524-1.51a4 4 0 0 1-.288-.46c-.499-.93-.595-2.012-.595-3.067v-6.523c0-1.579.044-3.217.823-4.591a6.9 6.9 0 0 1 3.203-2.924c.63-.282 1.28-.538 1.96-.662c1.16-.213 3.096-.238 6.514-.191c2.215.198 3.325.814 4.064 2.357c.35.73.435 1.551.434 2.36c-.005 4.022-.009 6.988.002 11.267c-.412 3.09-2.089 3.819-5 3.975a.98.98 0 0 1-.813-.37l-1.432-1.788c-.16-.2-.221-.47-.098-.694c.26-.476.766-1.011 1.49-1.758a.5.5 0 0 0-.016-.712c-.785-.748-1.263-1.26-1.536-1.897a.46.46 0 0 1 .074-.463l1.996-2.281"></svg:path><svg:path d="M3.5 12.02a3.333 3.333 0 0 1 3.333-3.334c.666 0 1.451.117 2.098-.056a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2.02"></svg:path></svg:g>`,
})
export class HugeiconsFileCorruptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
