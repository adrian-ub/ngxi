import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDwgFastviewIcon],svg[arcticons-dwg-fastview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.023 8.579l-14.265 8.236c-.577.334-.933.95-.933 1.616v5.834c0 .667.356 1.283.933 1.616l6.998 4.04a1.87 1.87 0 0 0 1.866 0L30.682 27c.578-.333.934-.949.934-1.616V20.69a.622.622 0 0 0-.933-.539l-4.398 2.54a1.87 1.87 0 0 1-1.866 0l-2.074-1.198a.622.622 0 0 1 0-1.077l14.59-8.424m0 0l.776.448a6.31 6.31 0 0 1 3.156 5.466v12.188a6.31 6.31 0 0 1-3.156 5.466l-10.555 6.094a6.31 6.31 0 0 1-6.312 0L10.29 35.56a6.31 6.31 0 0 1-3.156-5.466V17.906a6.31 6.31 0 0 1 3.156-5.466l10.555-6.095a6.31 6.31 0 0 1 6.312 0l3.868 2.234"></svg:path>`,
})
export class ArcticonsDwgFastviewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
