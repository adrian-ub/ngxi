import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIdentityPlatformOutlineRoundedIcon],svg[material-symbols-identity-platform-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13q-1.45 0-2.475-1.025T8.5 9.5t1.025-2.475T12 6t2.475 1.025T15.5 9.5t-1.025 2.475T12 13m0-2q.625 0 1.063-.437T13.5 9.5t-.437-1.062T12 8t-1.062.438T10.5 9.5t.438 1.063T12 11m-8.05 6.575q-.45-.275-.7-.725T3 15.875v-7.75q0-.525.25-.975t.7-.725l7-4.3q.5-.3 1.05-.3t1.05.3l7 4.3q.45.275.7.725t.25.975v7.75q0 .525-.25.975t-.7.725l-7 4.3q-.5.3-1.05.3t-1.05-.3zM12 17q-.95 0-1.888.225t-1.787.675L12 20.175l3.675-2.275q-.85-.45-1.787-.675T12 17m-5.6-.275q1.25-.85 2.675-1.287T12 15t2.925.438t2.675 1.287L19 15.9V8.125L12 3.85L5 8.125V15.9zM12 12"></svg:path>`,
})
export class MaterialSymbolsIdentityPlatformOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
