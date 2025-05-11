import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGoToLineIcon],svg[material-symbols-go-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7V4h3v3zm0 13v-3h3v3z"></svg:path>`,
})
export class MaterialSymbolsGoToLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGolfCourseIcon],svg[material-symbols-golf-course-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 21q-.625 0-1.062-.437T18 19.5t.438-1.062T19.5 18t1.063.438T21 19.5t-.437 1.063T19.5 21M10 22q-2.5 0-4.25-.587T4 20q0-.575.825-1.025T7 18.25V20h2V2l8 3.9L11 9v9.05q2.15.125 3.575.663T16 20q0 .825-1.75 1.413T10 22"></svg:path>`,
})
export class MaterialSymbolsGolfCourseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGondolaLiftIcon],svg[material-symbols-gondola-lift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-6q0-1.65 1.175-2.825T7 9h4V6.275L1 9V7l5.125-1.4q-.05-.125-.088-.275T6 5q0-.625.438-1.063T7.5 3.5q.575 0 1 .375t.475.95L11 4.275V3h2v.725l2.15-.575q-.075-.15-.112-.312T15 2.5q0-.625.438-1.062T16.5 1q.575 0 1.013.4t.487.975L23 1v2L13 5.725V9h4q1.65 0 2.825 1.175T21 13v6q0 .825-.587 1.413T19 21zm0-6h3.325v-4H7q-.825 0-1.412.588T5 13zm5.325 0h3.325v-4h-3.325zm5.35 0H19v-2q0-.825-.587-1.412T17 11h-1.325z"></svg:path>`,
})
export class MaterialSymbolsGondolaLiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGoogleFiIcon],svg[material-symbols-google-fi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8q-.825 0-1.413-.588Q16 6.825 16 6t.587-1.412Q17.175 4 18 4q.825 0 1.413.588Q20 5.175 20 6t-.587 1.412Q18.825 8 18 8ZM6 8q-.825 0-1.412-.588Q4 6.825 4 6t.588-1.412Q5.175 4 6 4h9.775q-.35.4-.562.912Q15 5.425 15 6q0 .575.213 1.087q.212.513.562.913Zm12 12q-.825 0-1.413-.587Q16 18.825 16 18v-6q0-.825.587-1.413Q17.175 10 18 10q.825 0 1.413.587Q20 11.175 20 12v6q0 .825-.587 1.413Q18.825 20 18 20ZM6 14q-.825 0-1.412-.588Q4 12.825 4 12t.588-1.413Q5.175 10 6 10t1.412.587Q8 11.175 8 12v2Zm0 6q-.825 0-1.412-.587Q4 18.825 4 18v-3.775q.4.35.913.562Q5.425 15 6 15h2v3q0 .825-.588 1.413Q6.825 20 6 20Zm3-6v-2q0-.575-.212-1.088q-.213-.512-.563-.912H12q.825 0 1.363.587q.537.588.537 1.413q0 .825-.588 1.412Q12.725 14 11.9 14Z"></svg:path>`,
})
export class MaterialSymbolsGoogleFiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGoogleGuaranteeIcon],svg[material-symbols-google-guarantee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.025 21.025q-3.425 0-5.725-2.475T4 12.725V5.5q0-.825.588-1.413Q5.175 3.5 6 3.5h12q.825 0 1.413.587Q20 4.675 20 5.5v1.75q0 .4-.15.762q-.15.363-.425.638l-5.775 5.775q-.575.575-1.412.575q-.838 0-1.413-.575L8 11.6l1.4-1.425L12.25 13L18 7.25V5.5H6v7.3q0 2.55 1.725 4.375Q9.45 19 12.025 19q2.5 0 4.237-1.75Q18 15.5 18 13h2q0 3.35-2.312 5.688q-2.313 2.337-5.663 2.337Z"></svg:path>`,
})
export class MaterialSymbolsGoogleGuaranteeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGoogleHomeDevicesIcon],svg[material-symbols-google-home-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v2h-2V5H4v12h7v4zm7.15-4.5q0-.975.688-1.662t1.662-.688t1.663.688t.687 1.662t-.687 1.663t-1.663.687t-1.662-.687t-.688-1.663M21 8q.425 0 .713.288T22 9v11q0 .425-.288.713T21 21h-7q-.425 0-.712-.288T13 20V9q0-.425.288-.712T14 8zm-3.5 1q-.65 0-1.075.425T16 10.5t.425 1.075T17.5 12t1.075-.425T19 10.5t-.425-1.075T17.5 9m0 11q1.475 0 2.488-1.012T21 16.5t-1.012-2.488T17.5 13t-2.488 1.013T14 16.5t1.013 2.488T17.5 20"></svg:path>`,
})
export class MaterialSymbolsGoogleHomeDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGoogleTravelIcon],svg[material-symbols-google-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22q-.625 0-1.062-.438Q7.5 21.125 7.5 20.5V20q-.625 0-1.062-.438Q6 19.125 6 18.5v-11q0-.625.438-1.062Q6.875 6 7.5 6H9V2.75q0-.3.225-.525Q9.45 2 9.75 2h4.5q.3 0 .525.225q.225.225.225.525V6h1.5q.625 0 1.062.438Q18 6.875 18 7.5v11q0 .625-.438 1.062Q17.125 20 16.5 20v.5q0 .625-.438 1.062Q15.625 22 15 22t-1.062-.438q-.438-.437-.438-1.062V20h-3v.5q0 .625-.438 1.062Q9.625 22 9 22Zm1.5-16h3V3.5h-3Zm1.575 10.5q1.625 0 2.613-1.05q.987-1.05.987-2.65q0-.2-.012-.375q-.013-.175-.063-.35q0-.025-.025-.025H12.1q-.025 0-.025.05v1.35l.025.05h1.95q.025 0 .025.05q-.15.725-.725 1.087q-.575.363-1.275.363q-.95 0-1.587-.688q-.638-.687-.638-1.587q0-.9.65-1.575q.65-.675 1.575-.675q.425 0 .775.125q.35.125.65.4q0 .025.025.025T13.55 11l1-1.025v-.05q-.5-.45-1.112-.7q-.613-.25-1.363-.25q-1.575 0-2.662 1.112Q8.325 11.2 8.325 12.75q0 1.525 1.088 2.637Q10.5 16.5 12.075 16.5Z"></svg:path>`,
})
export class MaterialSymbolsGoogleTravelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGoogleTvIcon],svg[material-symbols-google-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.3q-.65-.6-1.475-.95Q19.7 8 18.75 8H7.5v-.75q0-1.35.95-2.3Q9.4 4 10.75 4H20q.825 0 1.413.588Q22 5.175 22 6ZM5.25 14.5q-1.35 0-2.3-.95Q2 12.6 2 11.25V6q0-.825.588-1.412Q3.175 4 4 4h3.3q-.6.65-.95 1.475Q6 6.3 6 7.25v7.25ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18v-3.3q.65.6 1.475.95Q4.3 16 5.25 16H16.5v.75q0 1.35-.95 2.3q-.95.95-2.3.95Zm12.7 0q.6-.65.95-1.475q.35-.825.35-1.775V9.5h.75q1.35 0 2.3.95q.95.95.95 2.3V18q0 .825-.587 1.413Q20.825 20 20 20Z"></svg:path>`,
})
export class MaterialSymbolsGoogleTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGoogleWifiIcon],svg[material-symbols-google-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.6 10l.275-4.125q.05-.8.625-1.338T4.875 4h14.25q.8 0 1.375.537t.625 1.338L21.4 10zM5 20l-.325-1H4.15q-.875 0-1.463-.625t-.537-1.5L2.475 12h19.05l.325 4.875q.05.875-.537 1.5T19.85 19h-.525L19 20z"></svg:path>`,
})
export class MaterialSymbolsGoogleWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGooglerTravelIcon],svg[material-symbols-googler-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 5.5q-.825 0-1.413-.588Q15.5 4.325 15.5 3.5t.587-1.413Q16.675 1.5 17.5 1.5q.825 0 1.413.587q.587.588.587 1.413q0 .825-.587 1.412q-.588.588-1.413.588ZM11 23l2.8-14.1l-1.8.7V13h-.7l-6.75 7.925q-.025-.025-.287-.225q-.263-.2-.763-.2q-.25 0-.662.15q-.413.15-.688.7l-1.1-.95q-.15-.125-.238-.3q-.087-.175-.112-.375q-.025-.2.038-.388Q.8 19.15.925 19l3.25-3.8q.125-.175.3-.25q.175-.075.375-.1q.2-.025.388.05q.187.075.337.2L7.1 16.4L10 13V8.3l5.05-2.15q.725-.325 1.475-.075q.75.25 1.175.925l1 1.6q.6 1.05 1.738 1.725Q21.575 11 23 11v2q-1.65 0-3.087-.688q-1.438-.687-2.413-1.812l-.6 3l2.1 2V23h-2v-6l-2.1-2l-1.8 8Zm-8.5-1q0-.425.288-.712Q3.075 21 3.5 21t.713.288q.287.287.287.712t-.287.712Q3.925 23 3.5 23t-.712-.288Q2.5 22.425 2.5 22Z"></svg:path>`,
})
export class MaterialSymbolsGooglerTravelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGpayIcon],svg[material-symbols-gpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.2 15.1l2.275-3.95q.2-.35.275-.675q.075-.325.075-.7q0-.625-.5-1.325T9.25 6.95l1.25-2.2q.35-.575.938-.913q.587-.337 1.237-.337q.35 0 .663.087q.312.088.587.263L18.2 6.325q-.725.1-1.5.613q-.775.512-1.225 1.312L11.7 14.8q-.4.675-1.125.737Q9.85 15.6 9.2 15.1Zm-1.65 3.675L3.25 16.3q-.625-.35-.938-.95Q2 14.75 2 14.1q0-.35.088-.638q.087-.287.237-.562l3.05-5.3q.2-.35.563-.55q.362-.2.762-.2q.15 0 .338.037q.187.038.387.163l2.65 1.55q.325.2.538.525q.212.325.212.65q0 .225-.037.45q-.038.225-.163.425l-2.775 4.8q-.425.725-.5 1.6q-.075.875.2 1.725Zm.75-1.25q0-.425.087-.825q.088-.4.313-.75q.45.275.838.438q.387.162.787.162q.575 0 1.2-.275t1.05-1l3.8-6.525q1.125.525 1.525 1.562q.4 1.038-.175 2.088l-3.775 6.575q-.325.575-1.112 1.05q-.788.475-1.488.475q-1.25 0-2.15-.837q-.9-.838-.9-2.138Zm8.025-.65L18.6 12.9q.275-.475.375-.925q.1-.45.1-.925q0-.725-.488-1.675Q18.1 8.425 17 7.95q.275-.275.812-.5q.538-.225 1.213-.225q1.225 0 2.1.9T22 10.25q0 .425-.1.787q-.1.363-.3.713l-2.775 4.825q-.2.35-.537.55q-.338.2-.763.2q-.25 0-.5-.075t-.7-.375Z"></svg:path>`,
})
export class MaterialSymbolsGpayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGppBadIcon],svg[material-symbols-gpp-bad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.9 15.5l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1l-1.4-1.4l-2.1 2.1l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1zM12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22"></svg:path>`,
})
export class MaterialSymbolsGppBadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGppMaybeIcon],svg[material-symbols-gpp-maybe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16q.425 0 .713-.288T13 15t-.288-.712T12 14t-.712.288T11 15t.288.713T12 16m-1-4h2V7h-2zm1 10q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22"></svg:path>`,
})
export class MaterialSymbolsGppMaybeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGradientIcon],svg[material-symbols-gradient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm6-10v2h2v-2zm-4 0v2h2v-2zm2 2v2h2v-2zm4 0v2h2v-2zm-8 0v2h2v-2zm10-2v2h2v2h2v-2h-2v-2zm-8 4v2H5v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h-2v2h-2v-2h-2v2H9v-2zm12-4v2zm0 4v2z"></svg:path>`,
})
export class MaterialSymbolsGradientIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGradingIcon],svg[material-symbols-grading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.425 20.975L13.6 18.15l1.4-1.4l1.425 1.425L19.6 15l1.4 1.4zM3 21v-2h9v2zm0-4v-2h9v2zm0-4v-2h18v2zm0-4V7h18v2zm0-4V3h18v2z"></svg:path>`,
})
export class MaterialSymbolsGradingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGrainIcon],svg[material-symbols-grain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-.825 0-1.412-.587T4 18t.588-1.412T6 16t1.413.588T8 18t-.587 1.413T6 20m8 0q-.825 0-1.412-.587T12 18t.588-1.412T14 16t1.413.588T16 18t-.587 1.413T14 20m-4-4q-.825 0-1.412-.587T8 14t.588-1.412T10 12t1.413.588T12 14t-.587 1.413T10 16m8 0q-.825 0-1.412-.587T16 14t.588-1.412T18 12t1.413.588T20 14t-.587 1.413T18 16M6 12q-.825 0-1.412-.587T4 10t.588-1.412T6 8t1.413.588T8 10t-.587 1.413T6 12m8 0q-.825 0-1.412-.587T12 10t.588-1.412T14 8t1.413.588T16 10t-.587 1.413T14 12m-4-4q-.825 0-1.412-.587T8 6t.588-1.412T10 4t1.413.588T12 6t-.587 1.413T10 8m8 0q-.825 0-1.412-.587T16 6t.588-1.412T18 4t1.413.588T20 6t-.587 1.413T18 8"></svg:path>`,
})
export class MaterialSymbolsGrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGraph1Icon],svg[material-symbols-graph-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22q-1.25 0-2.125-.875T4 19q0-.975.563-1.75T6 16.175v-8.35q-.875-.3-1.437-1.075T4 5q0-1.25.875-2.125T7 2t2.125.875T10 5q0 .975-.562 1.75T8 7.825V8q0 1.25.875 2.125T11 11h2q2.075 0 3.538 1.463T18 16v.175q.875.3 1.438 1.075T20 19q0 1.25-.875 2.125T17 22t-2.125-.875T14 19q0-.975.563-1.75T16 16.175V16q0-1.25-.875-2.125T13 13h-2q-.85 0-1.612-.262T8 12v4.175q.875.3 1.438 1.075T10 19q0 1.25-.875 2.125T7 22m0-2q.425 0 .713-.288T8 19t-.288-.712T7 18t-.712.288T6 19t.288.713T7 20m10 0q.425 0 .713-.288T18 19t-.288-.712T17 18t-.712.288T16 19t.288.713T17 20M7 6q.425 0 .713-.288T8 5t-.288-.712T7 4t-.712.288T6 5t.288.713T7 6"></svg:path>`,
})
export class MaterialSymbolsGraph1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGraph2Icon],svg[material-symbols-graph-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-1.25 0-2.125-.875T2 19q0-.975.563-1.75T4 16.175V14q0-1.25.875-2.125T7 11h4V7.825q-.875-.3-1.437-1.075T9 5q0-1.25.875-2.125T12 2t2.125.875T15 5q0 .975-.562 1.75T13 7.825V11h4q1.25 0 2.125.875T20 14v2.175q.875.3 1.438 1.075T22 19q0 1.25-.875 2.125T19 22t-2.125-.875T16 19q0-.975.563-1.75T18 16.175V14q0-.425-.288-.712T17 13h-4v3.175q.875.3 1.438 1.075T15 19q0 1.25-.875 2.125T12 22t-2.125-.875T9 19q0-.975.563-1.75T11 16.175V13H7q-.425 0-.712.288T6 14v2.175q.875.3 1.438 1.075T8 19q0 1.25-.875 2.125T5 22m0-2q.425 0 .713-.288T6 19t-.288-.712T5 18t-.712.288T4 19t.288.713T5 20m7 0q.425 0 .713-.288T13 19t-.288-.712T12 18t-.712.288T11 19t.288.713T12 20m7 0q.425 0 .713-.288T20 19t-.288-.712T19 18t-.712.288T18 19t.288.713T19 20M12 6q.425 0 .713-.288T13 5t-.288-.712T12 4t-.712.288T11 5t.288.713T12 6"></svg:path>`,
})
export class MaterialSymbolsGraph2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGraph3Icon],svg[material-symbols-graph-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-1.25 0-2.125-.875T9 19q0-.125.013-.275t.037-.275l-2.075-1.175q-.4.35-.9.538T5 18q-1.25 0-2.125-.875T2 15t.875-2.125T5 12q.6 0 1.125.225t.95.625l2.975-1.5q-.075-.575.062-1.125T10.6 9.2l-.85-1.3q-.175.05-.363.075T9 8q-1.25 0-2.125-.875T6 5t.875-2.125T9 2t2.125.875T12 5q0 .5-.162.963T11.4 6.8l.875 1.3q.2-.05.375-.075T13.025 8q.425 0 .8.1t.725.3l1.65-1.35q-.1-.25-.15-.512T16 6q0-1.25.875-2.125T19 3t2.125.875T22 6t-.875 2.125T19 9q-.425 0-.8-.112t-.725-.313l-1.65 1.375q.1.25.15.513t.05.537q0 1.25-.875 2.125T13.025 14q-.6 0-1.137-.225t-.963-.625l-2.95 1.475q.05.225.038.45t-.063.45l2.1 1.2q.4-.35.888-.538T12 16q1.25 0 2.125.875T15 19t-.875 2.125T12 22m-7-6q.425 0 .713-.288T6 15t-.288-.712T5 14t-.712.288T4 15t.288.713T5 16M9 6q.425 0 .713-.288T10 5t-.288-.712T9 4t-.712.288T8 5t.288.713T9 6m3 14q.425 0 .713-.288T13 19t-.288-.712T12 18t-.712.288T11 19t.288.713T12 20m1-8q.425 0 .713-.288T14 11t-.288-.712T13 10t-.712.288T12 11t.288.713T13 12m6-5q.425 0 .713-.288T20 6t-.288-.712T19 5t-.712.288T18 6t.288.713T19 7"></svg:path>`,
})
export class MaterialSymbolsGraph3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGraph4Icon],svg[material-symbols-graph-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.05 22q-1.25 0-2.125-.875T9.05 19q0-.95.55-1.713T11 16.2V9.8l-3.425 4.15q.2.35.313.738T8 15.5q0 1.25-.875 2.125T5 18.5t-2.125-.875T2 15.5t.875-2.125T5 12.5q.275 0 .525.038t.5.137l4.3-5.2q-.6-.425-.962-1.063T9 5q0-1.25.875-2.125T12 2t2.125.875T15 5q0 .775-.363 1.413t-.962 1.062l4.3 5.2q.25-.1.5-.137T19 12.5q1.25 0 2.125.875T22 15.5t-.875 2.125T19 18.5t-2.125-.875T16 15.5q0-.425.113-.812t.312-.738L13 9.8v6.35q.9.3 1.475 1.075T15.05 19q0 1.25-.875 2.125T12.05 22m0-2q.425 0 .712-.288T13.05 19t-.288-.712T12.05 18t-.712.288t-.288.712t.288.713t.712.287M5 16.5q.425 0 .713-.288T6 15.5t-.288-.712T5 14.5t-.712.288T4 15.5t.288.713T5 16.5m14 0q.425 0 .713-.288T20 15.5t-.288-.712T19 14.5t-.712.288T18 15.5t.288.713t.712.287M12 6q.425 0 .713-.288T13 5t-.288-.712T12 4t-.712.288T11 5t.288.713T12 6"></svg:path>`,
})
export class MaterialSymbolsGraph4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGraph5Icon],svg[material-symbols-graph-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22.5q-1.25 0-2.125-.875T9 19.5q0-.975.563-1.75T11 16.675V14.85q-.275-.1-.525-.237t-.45-.338L8.45 15.2q.025.125.038.263t.012.287q0 1.25-.875 2.125T5.5 18.75t-2.125-.875T2.5 15.75t.875-2.125T5.5 12.75q.575 0 1.075.188t.9.537l1.55-.9Q9 12.45 8.987 12.3t-.012-.3t.013-.288t.037-.262l-1.55-.925q-.4.35-.9.538T5.5 11.25q-1.25 0-2.125-.875T2.5 8.25t.875-2.125T5.5 5.25t2.125.875T8.5 8.25q0 .15-.012.3t-.038.275l1.575.9q.2-.2.45-.325T11 9.175V7.35q-.875-.3-1.437-1.087T9 4.5q0-1.25.875-2.125T12 1.5t2.125.875T15 4.5q0 .975-.562 1.763T13 7.35v1.825q.275.1.513.238t.437.337l1.6-.95q-.025-.125-.038-.262T15.5 8.25q0-1.25.875-2.125T18.5 5.25t2.125.875t.875 2.125t-.875 2.125t-2.125.875q-.575 0-1.062-.187t-.888-.538l-1.625.95q.025.125.038.263t.012.262t-.012.275t-.038.275l1.625.925q.4-.35.888-.537t1.062-.188q1.25 0 2.125.875t.875 2.125t-.875 2.125t-2.125.875t-2.125-.875t-.875-2.125q0-.15.013-.288t.037-.262l-1.6-.925q-.2.2-.437.325t-.513.225v1.85q.875.3 1.438 1.075T15 19.5q0 1.25-.875 2.125T12 22.5m0-2q.425 0 .713-.288T13 19.5t-.288-.712T12 18.5t-.712.288T11 19.5t.288.713t.712.287m-6.5-3.75q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m13 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M12 13q.425 0 .713-.288T13 12t-.288-.712T12 11t-.712.288T11 12t.288.713T12 13M5.5 9.25q.425 0 .713-.288T6.5 8.25t-.288-.712T5.5 7.25t-.712.288t-.288.712t.288.713t.712.287m13 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M12 5.5q.425 0 .713-.288T13 4.5t-.288-.712T12 3.5t-.712.288T11 4.5t.288.713T12 5.5"></svg:path>`,
})
export class MaterialSymbolsGraph5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGraph6Icon],svg[material-symbols-graph-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22.5q-1.25 0-2.125-.875T9 19.5t.875-2.125T12 16.5t2.125.875T15 19.5t-.875 2.125T12 22.5m0-2q.425 0 .713-.288T13 19.5t-.288-.712T12 18.5t-.712.288T11 19.5t.288.713t.712.287m-6.5-1.75q-1.25 0-2.125-.875T2.5 15.75t.875-2.125T5.5 12.75t2.125.875t.875 2.125t-.875 2.125t-2.125.875m13 0q-1.25 0-2.125-.875T15.5 15.75t.875-2.125t2.125-.875t2.125.875t.875 2.125t-.875 2.125t-2.125.875m-13-2q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m13 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m-13-5.5q-1.25 0-2.125-.875T2.5 8.25t.875-2.125T5.5 5.25t2.125.875T8.5 8.25t-.875 2.125t-2.125.875m13 0q-1.25 0-2.125-.875T15.5 8.25t.875-2.125T18.5 5.25t2.125.875t.875 2.125t-.875 2.125t-2.125.875m-13-2q.425 0 .713-.288T6.5 8.25t-.288-.712T5.5 7.25t-.712.288t-.288.712t.288.713t.712.287m13 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M12 7.5q-1.25 0-2.125-.875T9 4.5t.875-2.125T12 1.5t2.125.875T15 4.5t-.875 2.125T12 7.5m0-2q.425 0 .713-.288T13 4.5t-.288-.712T12 3.5t-.712.288T11 4.5t.288.713T12 5.5"></svg:path>`,
})
export class MaterialSymbolsGraph6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGraph7Icon],svg[material-symbols-graph-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23q-1.25 0-2.125-.875T9 20q0-.35.063-.663t.212-.612l-4-4.025q-.3.125-.625.213T3.975 15q-1.25 0-2.112-.875T1 12t.863-2.125T3.975 9q.975 0 1.75.563T6.8 11h2.375q.225-.65.7-1.112T11 9.2V6.825q-.875-.3-1.437-1.075T9 4q0-1.25.875-2.125T12 1t2.125.875T15 4q0 .35-.075.675T14.7 5.3l4 4q.3-.15.625-.225T20 9q1.25 0 2.125.875T23 12t-.875 2.125T20 15q-.975 0-1.75-.562T17.175 13H14.8q-.225.65-.687 1.125t-1.113.7v2.35q.875.3 1.438 1.075T15 20q0 1.25-.875 2.125T12 23m-1-5.825v-2.35q-.325-.125-.6-.3t-.513-.413t-.412-.512t-.3-.6H6.8q0 .025-.013.063l-.025.075q-.012.037-.025.062l-.037.075l.725.725q.6.6 1.275 1.288t1.275 1.287l.725.725q.05-.025.088-.038t.074-.037t.075-.038t.063-.012M14.8 11h2.375q0-.05.012-.088t.038-.075t.037-.075t.038-.062l-.725-.725L15.3 8.7l-1.275-1.275L13.3 6.7q-.025.025-.063.037t-.075.038t-.075.037t-.087.013V9.2q.3.1.588.287t.512.413t.413.513t.287.587m5.2 2q.425 0 .713-.288T21 12t-.288-.712T20 11t-.712.288T19 12t.288.713T20 13m-8 0q.425 0 .713-.288T13 12t-.288-.712T12 11t-.712.288T11 12t.288.713T12 13m0 8q.425 0 .713-.288T13 20t-.288-.712T12 19t-.712.288T11 20t.288.713T12 21m-8-8q.425 0 .713-.288T5 12t-.288-.712T4 11t-.712.288T3 12t.288.713T4 13m8-8q.425 0 .713-.288T13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5"></svg:path>`,
})
export class MaterialSymbolsGraph7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGraphicEqIcon],svg[material-symbols-graphic-eq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18V6h2v12zm4 4V2h2v20zm-8-8v-4h2v4zm12 4V6h2v12zm4-4v-4h2v4z"></svg:path>`,
})
export class MaterialSymbolsGraphicEqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGrassIcon],svg[material-symbols-grass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-2h5.75q-.55-2.125-2.087-3.662T2 12.25q.5-.125.988-.187T4 12q3.35 0 5.675 2.325T12 20zm12 0q0-1.05-.225-2.087t-.65-1.988q1.05-1.775 2.863-2.85T20 12q.525 0 1.013.063t.987.187q-2.125.55-3.65 2.088T16.25 18H22v2zm-2-5.975q0-1.625.6-3.05t1.65-2.513t2.463-1.737t3.012-.7q-1.4.875-2.45 2.15t-1.625 2.85q-1.1.525-2.012 1.288T12 14.025m-1.825-1.875q-.3-.225-.6-.425t-.625-.4q0-.15.025-.312T9 10.7q0-1.9-.6-3.6T6.7 4q1.65.675 2.863 1.937t1.862 2.913q-.45.75-.775 1.588t-.475 1.712"></svg:path>`,
})
export class MaterialSymbolsGrassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGrid3x3Icon],svg[material-symbols-grid-3x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v-4H4v-2h4v-4H4V8h4V4h2v4h4V4h2v4h4v2h-4v4h4v2h-4v4h-2v-4h-4v4zm2-6h4v-4h-4z"></svg:path>`,
})
export class MaterialSymbolsGrid3x3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGrid3x3OffIcon],svg[material-symbols-grid-3x3-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.825 16l-2-2H20v2zM16 13.175L10.825 8H14V4h2v4h4v2h-4zm-6-6l-2-2V4h2zM19.775 22.6L16 18.825V20h-2v-3.175L13.175 16H10v4H8v-4H4v-2h4v-3.175L7.175 10H4V8h1.175L1.4 4.225L2.8 2.8l18.4 18.4z"></svg:path>`,
})
export class MaterialSymbolsGrid3x3OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGrid4x4Icon],svg[material-symbols-grid-4x4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22v-3H2v-2h3v-4H2v-2h3V7H2V5h3V2h2v3h4V2h2v3h4V2h2v3h3v2h-3v4h3v2h-3v4h3v2h-3v3h-2v-3h-4v3h-2v-3H7v3zm2-5h4v-4H7zm6 0h4v-4h-4zm-6-6h4V7H7zm6 0h4V7h-4z"></svg:path>`,
})
export class MaterialSymbolsGrid4x4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGridGoldenratioIcon],svg[material-symbols-grid-goldenratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22v-7H2v-2h7v-2H2V9h7V2h2v7h2V2h2v7h7v2h-7v2h7v2h-7v7h-2v-7h-2v7zm2-9h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsGridGoldenratioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGridGuidesIcon],svg[material-symbols-grid-guides-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.4 19h11.175l-2.1-2.1q-.725.525-1.612.813T12 18t-1.862-.3t-1.613-.825zM5 17.575l2.1-2.1q-.525-.725-.812-1.612T6 12t.3-1.862t.825-1.613L5 6.4zm3.55-3.55L10.6 12L8.55 9.975q-.275.45-.413.95T8 12t.138 1.075t.412.95M12 16q.575 0 1.075-.138t.95-.412L12 13.4l-2.05 2.05q.45.275.962.412T12 16m0-5.425l2.025-2.025q-.45-.275-.95-.413T12 8t-1.075.137t-.95.413zm3.45 3.45q.275-.45.413-.95T16 12t-.138-1.088t-.412-.962l-2.025 2.025zm3.55 3.55V6.4l-2.125 2.125q.525.725.825 1.613T18 12t-.288 1.863t-.812 1.612zm-3.525-10.45L17.6 5H6.425l2.1 2.1q.725-.525 1.613-.812T12 6t1.863.3t1.612.825M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsGridGuidesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGridOffIcon],svg[material-symbols-grid-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.475 23.3l-2.3-2.3h-1.85v-1.85l-2-2V21h-4.65v-4.675H13.5l-2-2H9.675v-1.85l-2-2v3.85H3v-4.65h3.875l-2-2H3V5.8L.7 3.5l1.4-1.4l19.8 19.8zM5 21q-.825 0-1.412-.587T3 19v-2.675h4.675V21zm16-2.9l-1.775-1.775H21zm-3.775-3.775l-.9-.9v-3.75H21v4.65zm-2.9-2.9l-1.75-1.75h1.75zm-3.75-3.75l-.9-.9V3h4.65v4.675zm5.75 0V3H19q.825 0 1.413.588T21 5v2.675zm-8.65-2.9L5.9 3h1.775z"></svg:path>`,
})
export class MaterialSymbolsGridOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGridOnIcon],svg[material-symbols-grid-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21h2.675v-4.675H3V19q0 .825.588 1.413T5 21m4.675 0h4.65v-4.675h-4.65zm6.65 0H19q.825 0 1.413-.587T21 19v-2.675h-4.675zM3 14.325h4.675v-4.65H3zm6.675 0h4.65v-4.65h-4.65zm6.65 0H21v-4.65h-4.675zM3 7.675h4.675V3H5q-.825 0-1.412.588T3 5zm6.675 0h4.65V3h-4.65zm6.65 0H21V5q0-.825-.587-1.412T19 3h-2.675z"></svg:path>`,
})
export class MaterialSymbolsGridOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGridViewIcon],svg[material-symbols-grid-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11V3h8v8zm0 10v-8h8v8zm10-10V3h8v8zm0 10v-8h8v8z"></svg:path>`,
})
export class MaterialSymbolsGridViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGroceryIcon],svg[material-symbols-grocery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22q-2.5 0-4.25-1.75T10 16t1.75-4.25T16 10t4.25 1.75T22 16t-1.75 4.25T16 22m0-2q1.65 0 2.825-1.175T20 16t-1.175-2.825T16 12t-2.825 1.175T12 16t1.175 2.825T16 20M4 20q-.825 0-1.412-.587T2 18v-7.6q0-.2.038-.4t.112-.4l2-4.6H4q-.425 0-.712-.288T3 4V3q0-.425.288-.712T4 2h7q.425 0 .713.288T12 3v1q0 .425-.288.713T11 5h-.15l1.65 3.8q-.475.25-.9.525t-.8.625L8.7 5H6.3L4 10.4V18h4.25q.125.525.337 1.038T9.1 20zM16 9q-1.05 0-1.775-.725T13.5 6.5t.725-1.775T16 4zq0-1.05.725-1.775T18.5 6.5t1.775.725T21 9z"></svg:path>`,
})
export class MaterialSymbolsGroceryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGroupIcon],svg[material-symbols-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20zm18 0v-3q0-1.1-.612-2.113T16.65 13.15q1.275.15 2.4.513t2.1.887q.9.5 1.375 1.112T23 17v3zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m10-4q0 1.65-1.175 2.825T15 12q-.275 0-.7-.062t-.7-.138q.675-.8 1.038-1.775T15 8t-.362-2.025T13.6 4.2q.35-.125.7-.163T15 4q1.65 0 2.825 1.175T19 8"></svg:path>`,
})
export class MaterialSymbolsGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGroupAddIcon],svg[material-symbols-group-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 11.95q.725-.8 1.113-1.825T14 8t-.387-2.125T12.5 4.05q1.5.2 2.5 1.325T16 8t-1 2.625t-2.5 1.325M18 20v-3q0-.9-.4-1.713t-1.05-1.437q1.275.45 2.363 1.163T20 17v3zm2-7v-2h-2V9h2V7h2v2h2v2h-2v2zM8 12q-1.65 0-2.825-1.175T4 8t1.175-2.825T8 4t2.825 1.175T12 8t-1.175 2.825T8 12m-8 8v-2.8q0-.85.438-1.562T1.6 14.55q1.55-.775 3.15-1.162T8 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T16 17.2V20z"></svg:path>`,
})
export class MaterialSymbolsGroupAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGroupAutoIcon],svg[material-symbols-group-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-2.25q0-.775.4-1.413t1.1-.987q1.3-.65 2.688-1T9.024 16q1.45 0 2.838.35t2.662 1q.675.35 1.075.988t.4 1.412V22H2Zm16 0v-2.5q0-.95-.488-1.775t-1.212-1.45q.8.2 1.588.438t1.512.612q.65.35 1.125.9T21 19.5V22h-3Zm-9-7q-1.45 0-2.475-1.025T5.5 11.5q0-1.45 1.025-2.475T9 8q1.45 0 2.475 1.025T12.5 11.5q0 1.45-1.025 2.475T9 15Zm8.5-3.5q0 1.45-1.025 2.475T14 15q-.2 0-.362-.013t-.338-.062q.625-.725.913-1.6T14.5 11.5q0-.95-.288-1.825t-.912-1.6q.175-.05.338-.062T14 8q1.45 0 2.475 1.025T17.5 11.5Zm1-1.5q0-1.875-1.313-3.188T14 5.5q1.875 0 3.188-1.313T18.5 1q0 1.875 1.313 3.188T23 5.5q-1.875 0-3.188 1.313T18.5 10Z"></svg:path>`,
})
export class MaterialSymbolsGroupAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGroupOffIcon],svg[material-symbols-group-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.475 23.3L17 19.825V20H1v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13q.3 0 .613.013t.612.037L9.175 12H9q-1.65 0-2.825-1.175T5 8v-.175L.675 3.5L2.1 2.075l19.8 19.8zM16.65 13.15q1.275.15 2.4.513t2.1.887q.9.5 1.375 1.112T23 17v3h-.125l-4-4q-.225-.825-.788-1.562T16.65 13.15m-2.6-1.975q.475-.7.713-1.5T15 8q0-1.05-.362-2.025T13.6 4.2q.35-.125.7-.162T15 4q1.65 0 2.825 1.175T19 8t-1.237 2.825T14.875 12zm-1.45-1.45L7.275 4.4q.4-.2.825-.3T9 4q1.65 0 2.825 1.175T13 8q0 .475-.1.9t-.3.825"></svg:path>`,
})
export class MaterialSymbolsGroupOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGroupRemoveIcon],svg[material-symbols-group-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 11.95q.725-.8 1.113-1.825T14 8t-.387-2.125T12.5 4.05q1.5.2 2.5 1.325T16 8t-1 2.625t-2.5 1.325M18 20v-3q0-.9-.4-1.713t-1.05-1.437q1.275.45 2.363 1.163T20 17v3zm6-9h-6V9h6zM8 12q-1.65 0-2.825-1.175T4 8t1.175-2.825T8 4t2.825 1.175T12 8t-1.175 2.825T8 12m-8 8v-2.8q0-.85.438-1.562T1.6 14.55q1.55-.775 3.15-1.162T8 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T16 17.2V20z"></svg:path>`,
})
export class MaterialSymbolsGroupRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGroupSearchIcon],svg[material-symbols-group-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m8 7q.85 0 1.413-.5T19 17q.025-.85-.562-1.425T17 15t-1.425.575T15 17t.575 1.425T17 19m4.6 4l-2.55-2.55q-.45.275-.962.413T17 21q-1.65 0-2.825-1.175T13 17t1.175-2.825T17 13t2.825 1.175T21 17q0 .575-.137 1.088t-.413.962L23 21.6zM1 20v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13q.8 0 1.613.088t1.612.287q-.6.8-.912 1.725T11 17q0 .8.2 1.563T11.8 20zM19 8q0 1.65-1.175 2.825T15 12q-.275 0-.7-.062t-.7-.138q.675-.8 1.038-1.775T15 8t-.362-2.025T13.6 4.2q.35-.125.7-.163T15 4q1.65 0 2.825 1.175T19 8"></svg:path>`,
})
export class MaterialSymbolsGroupSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGroupWorkIcon],svg[material-symbols-group-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16q.825 0 1.413-.587T10 14t-.587-1.412T8 12t-1.412.588T6 14t.588 1.413T8 16m8 0q.825 0 1.413-.587T18 14t-.587-1.412T16 12t-1.412.588T14 14t.588 1.413T16 16m-4-6q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 12q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsGroupWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGroupedBarChartIcon],svg[material-symbols-grouped-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V8h4v12zm5 0v-7h4v7zm7 0V4h4v16z"></svg:path>`,
})
export class MaterialSymbolsGroupedBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGroupsIcon],svg[material-symbols-groups-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 18v-1.575q0-1.075 1.1-1.75T4 14q.325 0 .625.013t.575.062q-.35.525-.525 1.1t-.175 1.2V18zm6 0v-1.625q0-.8.438-1.463t1.237-1.162T9.588 13T12 12.75q1.325 0 2.438.25t1.912.75t1.225 1.163t.425 1.462V18zm13.5 0v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14q1.8 0 2.9.663t1.1 1.762V18zM4 13q-.825 0-1.412-.587T2 11q0-.85.588-1.425T4 9q.85 0 1.425.575T6 11q0 .825-.575 1.413T4 13m16 0q-.825 0-1.412-.587T18 11q0-.85.588-1.425T20 9q.85 0 1.425.575T22 11q0 .825-.575 1.413T20 13m-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.137T12 6q1.275 0 2.138.863T15 9q0 1.25-.862 2.125T12 12"></svg:path>`,
})
export class MaterialSymbolsGroupsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGroups2Icon],svg[material-symbols-groups-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.275 12q-.7 0-1.15-.525T8.8 10.25l.3-1.8q.2-1.075 1.013-1.763T12 6q1.1 0 1.913.688t1.012 1.762l.3 1.8q.125.7-.325 1.225T13.75 12zm-7.175.975q-.575.025-.988-.225t-.537-.775q-.05-.225-.025-.45t.125-.425q0 .025-.025-.1q-.05-.05-.25-.6q-.05-.3.075-.575T1.8 9.35l.05-.05q.05-.475.388-.8t.837-.325q.075 0 .475.1l.075-.025q.125-.125.325-.187T4.375 8q.275 0 .488.088t.337.262q.025 0 .038.013t.037.012q.35.025.612.212t.388.513q.05.175.038.338t-.063.312q0 .025.025.1q.175.175.275.388t.1.437q0 .1-.15.525q-.025.05 0 .1l.05.4q0 .525-.437.9t-1.063.375zM20 13q-.825 0-1.412-.587T18 11q0-.3.088-.562t.237-.513l-.7-.625q-.25-.2-.088-.5T18 8.5h2q.825 0 1.413.588T22 10.5v.5q0 .825-.587 1.413T20 13M0 18v-1.575q0-1.1 1.113-1.763T4 14q.325 0 .625.013t.575.062q-.35.5-.525 1.075T4.5 16.375V18zm6 0v-1.625q0-1.625 1.663-2.625t4.337-1q2.7 0 4.35 1T18 16.375V18zm14-4q1.8 0 2.9.663t1.1 1.762V18h-4.5v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14"></svg:path>`,
})
export class MaterialSymbolsGroups2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGroups3Icon],svg[material-symbols-groups-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13.525L6.525 11L4 8.475L1.475 11zM17.5 13L20 9l2.5 4zM12 12q-1.25 0-2.125-.875T9 9q0-1.275.875-2.137T12 6q1.275 0 2.138.863T15 9q0 1.25-.862 2.125T12 12M0 18v-1.575q0-1.1 1.113-1.763T4 14q.325 0 .625.013t.575.062q-.35.5-.525 1.075T4.5 16.375V18zm6 0v-1.625q0-1.625 1.663-2.625t4.337-1q2.7 0 4.35 1T18 16.375V18zm14-4q1.8 0 2.9.663t1.1 1.762V18h-4.5v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14"></svg:path>`,
})
export class MaterialSymbolsGroups3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGuardianIcon],svg[material-symbols-guardian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23q-4.65 0-7.825-1.737T1 17q0-1.725 1.6-3.162T7 11.65v2.05q-1.825.575-2.912 1.475T3 17q0 1.6 2.7 2.8T12 21t6.3-1.2T21 17q0-.925-1.088-1.825T17 13.7v-2.05q2.8.75 4.4 2.188T23 17q0 2.525-3.175 4.263T12 23m-3-4V8H4V6h16v2h-5v11h-2v-5h-2v5zm3-14q-.825 0-1.412-.587T10 3t.588-1.412T12 1t1.413.588T14 3t-.587 1.413T12 5"></svg:path>`,
})
export class MaterialSymbolsGuardianIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGynecologyIcon],svg[material-symbols-gynecology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.1 21.45L8.375 20q-.225-.425-.325-.875t-.1-.925q0-.575.163-1.137T8.625 16q.2-.275.3-.587t.1-.663q0-.4-.15-.75l-.3-.7q-.25-.475-.413-.975T8 11.3V7.5q0-.625-.437-1.062T6.5 6q-.525 0-.925.35t-.525.85q.85.325 1.4 1.087T7 10q0 1.25-.875 2.125T4 13t-2.125-.875T1 10q0-1 .575-1.775T3.05 7.15Q3.175 5.8 4.163 4.9T6.5 4q.175 0 .35.012t.35.063Q8.3 3.5 9.512 3.25T12 3q1.25 0 2.463.25t2.312.825q.175-.05.35-.063t.35-.012q1.375 0 2.363.9t1.112 2.25q.9.3 1.475 1.075T23 10q0 1.25-.875 2.125T20 13t-2.125-.875T17 10q0-.95.55-1.713t1.4-1.087q-.125-.5-.525-.85t-.95-.35q-.625 0-1.05.438T16 7.5v3.8q0 .525-.175 1.025t-.4.975q-.175.35-.313.7t-.137.75q0 .35.1.663t.3.587q.325.5.5 1.063t.175 1.137q0 .475-.112.925t-.313.875l-.725 1.45l-1.8-.9l.725-1.45q.125-.2.175-.425t.05-.475q0-.3-.1-.575t-.25-.525q-.35-.5-.537-1.1t-.188-1.225q0-.575.163-1.088t.437-1.012q.15-.35.288-.687T14 11.3V7.5q0-.6.188-1.137t.537-.988q-.65-.2-1.337-.288T12 5t-1.388.088t-1.337.287q.35.45.538.988T10 7.5v3.8q0 .35.125.7t.3.675q.25.5.425 1.013t.175 1.087q0 .625-.187 1.213T10.3 17.1q-.175.25-.262.525t-.088.575q0 .25.05.475t.175.425l.725 1.45z"></svg:path>`,
})
export class MaterialSymbolsGynecologyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHMobiledataIcon],svg[material-symbols-h-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17V7h2v4h6V7h2v10h-2v-4H9v4z"></svg:path>`,
})
export class MaterialSymbolsHMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHMobiledataBadgeIcon],svg[material-symbols-h-mobiledata-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm3-4h2v-4h4v4h2V7h-2v4h-4V7H8z"></svg:path>`,
})
export class MaterialSymbolsHMobiledataBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHPlusMobiledataIcon],svg[material-symbols-h-plus-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17V7h2v4h6V7h2v10h-2v-4H6v4zm14-2v-2h-2v-2h2V9h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsHPlusMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHPlusMobiledataBadgeIcon],svg[material-symbols-h-plus-mobiledata-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21zm1.5-4h2v-4h4v4h2V7h-2v4h-4V7h-2zm11-2h2v-2h2v-2h-2V9h-2v2h-2v2h2z"></svg:path>`,
})
export class MaterialSymbolsHPlusMobiledataBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHailIcon],svg[material-symbols-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22v-6h3v6zm5 0V10.1q-1.25.425-1.625 1.563T7 14H5q0-3.2 1.875-5.1T12 7q2.5 0 3.75-1.238T17 2h2q0 2.2-.937 3.938T15 8.4V22h-2v-6h-2v6zm3-16q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsHailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHallwayIcon],svg[material-symbols-hallway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h3l4-4l4 4h3q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm1-4h12l-3.75-5l-3 4L9 14zm4.1-14h3.8L12 2.1z"></svg:path>`,
})
export class MaterialSymbolsHallwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHandBonesIcon],svg[material-symbols-hand-bones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.575 14.5q-.2.1-.413.013t-.287-.288l-.75-2q-.125-.35-.112-.687t.312-.463q.625-.25 1.163.175t.812 1.1l.4 1.075q.075.2.013.363t-.238.262zm6.25 7.5q-.425 0-.837-.175t-.688-.5L5.25 16.65q-.275-.325-.25-.725t.35-.675t.725-.237t.675.337L9 17.925q0-.2.05-.387t.15-.388l-1.15-3.3q-.125-.4.05-.775t.575-.5t.775.05t.5.575l.975 2.8h.575v-3q0-.425.288-.712T12.5 12t.713.288t.287.712v3h.6l.525-2.225q.1-.425.438-.638t.762-.112t.638.438t.112.762l-.4 1.775q.125.025.263.05t.262.075l.375-.975q.15-.4.525-.575t.775-.025q.375.15.537.525t.013.775L18 18.3V20q0 .825-.588 1.413T16 22zM7.775 6.525q-.2.025-.363-.112t-.187-.338L7 4.1q-.05-.425.213-.737T7.9 3t.738.213T9 3.9l.2 1.975q.025.2-.112.363t-.338.187zm.55 5.1q-.225.05-.412-.075T7.7 11.2l-.3-2.6q-.05-.425.213-.737T8.3 7.5t.738.213t.362.687l.275 2.425q.025.2-.075.35t-.3.2zM12 11q-.2 0-.35-.15t-.15-.35V8q0-.425.288-.712T12.5 7t.713.288T13.5 8v2.5q0 .2-.15.35T13 11zm0-5q-.2 0-.35-.15t-.15-.35V3q0-.425.288-.712T12.5 2t.713.288T13.5 3v2.5q0 .2-.15.35T13 6zm4.375 6.15l-1-.25q-.2-.05-.3-.2T15 11.35l.275-2.45q.05-.425.363-.687T16.375 8t.688.363t.212.737L17 11.725q-.025.225-.212.35t-.413.075m.575-5.025l-1-.1q-.2-.025-.337-.188t-.113-.362l.2-1.975q.05-.425.363-.687T16.8 3.6t.688.363t.212.737l-.2 1.975q-.025.2-.187.338t-.363.112m2 6.625l-.975-.3q-.2-.05-.288-.225t-.037-.375l.375-1.4q.125-.4.475-.612t.75-.088t.6.462t.1.738l-.375 1.45q-.05.2-.238.3t-.387.05M20 9.975l-.975-.25q-.2-.05-.3-.238t-.05-.387L19 7.95q.175-.6.425-1.125t.775-.4q.625.15.75.825t-.075 1.4l-.275.975q-.05.2-.225.3t-.375.05"></svg:path>`,
})
export class MaterialSymbolsHandBonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHandGestureIcon],svg[material-symbols-hand-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 23q-2.075 0-3.537-1.463T1 18h1.5q0 1.45 1.025 2.475T6 21.5zm4.05 0q-.75 0-1.4-.337T7.575 21.7L1.2 12.375l.6-.575q.475-.475 1.125-.55t1.175.3L7 13.575V4q0-.425.288-.712T8 3t.713.288T9 4v8h2V2q0-.425.288-.712T12 1t.713.288T13 2v10h2V3q0-.425.288-.712T16 2t.713.288T17 3v9h2V5q0-.425.288-.712T20 4t.713.288T21 5v14q0 1.65-1.175 2.825T17 23zM22 5.025q0-1.275-.875-2.15T18.975 2V.5q1.875 0 3.2 1.325t1.325 3.2z"></svg:path>`,
})
export class MaterialSymbolsHandGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHandGestureOffIcon],svg[material-symbols-hand-gesture-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 6.15l-2-2V4q0-.425.288-.712T8 3t.713.288T9 4zm4 4l-2-2V2q0-.425.288-.712T12 1t.713.288T13 2zM10.325 23q-.725 0-1.35-.387t-1.15-.913l-6.85-6.8l1.375-1.075q.45-.35 1.025-.425t1.1.2L7 14.875v-5.05L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-1.1-1.1q-.5.375-1.1.588T17 23zM22 5.025q0-1.275-.875-2.15T18.975 2V.5q1.875 0 3.2 1.325t1.325 3.2zM6 23q-2.075 0-3.537-1.463T1 18h1.5q0 1.45 1.025 2.475T6 21.5zm15-4.85l-6-5.975V3q0-.425.288-.712T16 2t.713.288T17 3v9.175h2V5q0-.425.288-.712T20 4t.713.288T21 5z"></svg:path>`,
})
export class MaterialSymbolsHandGestureOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHandheldControllerIcon],svg[material-symbols-handheld-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18q-1.65 0-2.825-1.175T7 14q-2.5.025-4.25-1.737T1 8q0-.825.588-1.412T3 6h4V5H5V3h6v2H9v1h3.175q.4 0 .763.15t.637.425l8.375 8.375Q23 16 23 17.45t-1.05 2.5t-2.5 1.05t-2.5-1.05L15 18zm0-4H8.975q0 .825.588 1.413T11 16h2z"></svg:path>`,
})
export class MaterialSymbolsHandheldControllerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHandshakeIcon],svg[material-symbols-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.1 21q-.425 0-.712-.288T11.1 20q0-.175.075-.363t.225-.337l4.625-4.625l-.725-.725l-4.6 4.625q-.15.15-.325.225t-.375.075q-.425 0-.712-.287T9 17.875q0-.25.075-.413t.2-.287L13.9 12.55l-.7-.7l-4.625 4.6q-.15.15-.325.225t-.4.075q-.4 0-.7-.3t-.3-.7q0-.2.075-.375t.225-.325l4.625-4.625l-.725-.7l-4.6 4.625q-.125.125-.3.2t-.425.075q-.425 0-.713-.288t-.287-.712q0-.2.075-.375t.225-.325L10.6 7.35l3.75 3.775q.275.275.65.438t.75.162q.8 0 1.4-.562t.6-1.438q0-.35-.125-.725t-.45-.7L12.7 3.825q.425-.4.95-.612T14.7 3q.65 0 1.2.213t1 .662l4.225 4.25q.45.45.663 1T22 10.4q0 .5-.225 1.013t-.65.937L12.8 20.7q-.2.2-.35.25t-.35.05m-8.575-8l-.65-.65q-.425-.4-.65-.95T2 10.25q0-.65.25-1.2t.625-.925L7.1 3.875q.4-.4.95-.638T9.125 3q.675 0 1.2.188t1.025.687L16.475 9q.15.15.225.325t.075.375q0 .4-.3.7t-.7.3q-.225 0-.375-.062t-.325-.238l-4.5-4.45z"></svg:path>`,
})
export class MaterialSymbolsHandshakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHandymanIcon],svg[material-symbols-handyman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.85 21.975q-.2 0-.375-.062t-.325-.213l-5.1-5.1q-.15-.15-.213-.325t-.062-.375t.063-.375t.212-.325l2.125-2.125q.15-.15.325-.212t.375-.063t.375.063t.325.212l5.1 5.1q.15.15.213.325t.062.375t-.062.375t-.213.325L19.55 21.7q-.15.15-.325.213t-.375.062M5.125 22q-.2 0-.387-.075T4.4 21.7l-2.1-2.1q-.15-.15-.225-.338T2 18.876t.075-.375t.225-.325l5.3-5.3h2.125l.85-.85L6.45 7.9H5.025L2 4.875L4.825 2.05L7.85 5.075V6.5l4.125 4.125l2.9-2.9L13.8 6.65l1.4-1.4h-2.825l-.7-.7L15.225 1l.7.7v2.825l1.4-1.4l3.55 3.55q.425.425.65.963t.225 1.137t-.225 1.15t-.65.975L18.75 8.775l-1.4 1.4l-1.05-1.05l-5.175 5.175v2.1l-5.3 5.3q-.15.15-.325.225T5.125 22"></svg:path>`,
})
export class MaterialSymbolsHandymanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHangoutMeetingIcon],svg[material-symbols-hangout-meeting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 14h4q.425 0 .713-.288T14.5 13v-.75l2 1.25v-5l-2 1.25V9q0-.425-.288-.713T13.5 8h-4q-.425 0-.713.288T8.5 9v4q0 .425.288.713T9.5 14Zm2.5 9v-3.5q-1.825 0-3.463-.688t-2.862-1.85q-1.225-1.162-1.95-2.7T3 11q0-1.875.713-3.513t1.924-2.862Q6.85 3.4 8.488 2.7T12 2q1.875 0 3.513.7t2.862 1.925Q19.6 5.85 20.3 7.488T21 11q0 3.45-2.4 6.65T12 23Z"></svg:path>`,
})
export class MaterialSymbolsHangoutMeetingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHangoutVideoIcon],svg[material-symbols-hangout-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h8v-3.2l4 3.2V8l-4 3.2V8H6zm-2 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsHangoutVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHangoutVideoOffIcon],svg[material-symbols-hangout-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 23.3L17.15 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4l.6.6v2.8L.7 3.5l1.4-1.4l19.8 19.8zm1.25-4.4L18 15.15V8l-4 3.15v-3.1h-3.1L6.85 4H20q.825 0 1.413.588T22 6v12q0 .225-.062.45t-.188.45M6 16h7.15L6 8.85z"></svg:path>`,
})
export class MaterialSymbolsHangoutVideoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHardDiskIcon],svg[material-symbols-hard-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm2-4h8v-2H8zm4-4q1.65 0 2.825-1.175T16 10t-1.175-2.825T12 6T9.175 7.175T8 10t1.175 2.825T12 14m0-3q-.425 0-.712-.288T11 10t.288-.712T12 9t.713.288T13 10t-.288.713T12 11"></svg:path>`,
})
export class MaterialSymbolsHardDiskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHardDriveIcon],svg[material-symbols-hard-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16q.625 0 1.063-.425T18.5 14.5q0-.625-.437-1.062T17 13q-.65 0-1.075.438T15.5 14.5q0 .65.425 1.075T17 16M2 9l3.4-3.4q.275-.275.638-.437T6.825 5H17.15q.425 0 .788.163t.637.437L22 9zm2 10q-.85 0-1.425-.575T2 17v-6h20v6q0 .85-.587 1.425T20 19z"></svg:path>`,
})
export class MaterialSymbolsHardDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHardDrive2Icon],svg[material-symbols-hard-drive-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19q.425 0 .713-.288T15 18t-.288-.712T14 17t-.712.288T13 18t.288.713T14 19m3 0q.425 0 .713-.288T18 18t-.288-.712T17 17t-.712.288T16 18t.288.713T17 19M3 13V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v9zm2 9q-.825 0-1.412-.587T3 20v-5h18v5q0 .825-.587 1.413T19 22z"></svg:path>`,
})
export class MaterialSymbolsHardDrive2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHardwareIcon],svg[material-symbols-hardware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11V8H4q0-2.075 1.463-3.537T9 3h6v3l3-3h2v8h-2l-3-3v3zm1 10q-.425 0-.712-.288T9 20v-7h6v7q0 .425-.288.713T14 21z"></svg:path>`,
})
export class MaterialSymbolsHardwareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdIcon],svg[material-symbols-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15h1.5v-2h2v2H11V9H9.5v2.5h-2V9H6zm7 0h4q.425 0 .713-.288T18 14v-4q0-.425-.288-.712T17 9h-4zm1.5-1.5v-3h2v3zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsHdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrAutoIcon],svg[material-symbols-hdr-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.9 17h1.9l1-2.8h4.4l1 2.8h1.9L13 6h-2zm3.45-4.4l1.6-4.55h.1l1.6 4.55zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsHdrAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrAutoSelectIcon],svg[material-symbols-hdr-auto-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.95 8.2l1-2.9h.1l1 2.9zM12 14q-2.5 0-4.25-1.75T6 8t1.75-4.25T12 2t4.25 1.75T18 8t-1.75 4.25T12 14m-3.25-3h1.2l.65-1.8h2.8l.65 1.8h1.2L12.6 4h-1.25zM20.5 22v-2h-2v-1.5h2v-2H22v2h2V20h-2v2zM13 22v-6h3.5q.6 0 1.05.45T18 17.5v1q0 .575-.262.888t-.638.512L18 22h-1.5l-.9-2h-1.1v2zm1.5-3.5h2v-1h-2zM0 22v-6h1.5v2h2v-2H5v6H3.5v-2.5h-2V22zm6.5 0v-6H10q.6 0 1.05.45t.45 1.05v3q0 .6-.45 1.05T10 22zM8 20.5h2v-3H8z"></svg:path>`,
})
export class MaterialSymbolsHdrAutoSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrEnhancedSelectIcon],svg[material-symbols-hdr-enhanced-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14q-2.5 0-4.25-1.75T6 8t1.75-4.25T12 2t4.25 1.75T18 8t-1.75 4.25T12 14m-1-3h2V9h2V7h-2V5h-2v2H9v2h2zm9.5 11v-2h-2v-1.5h2v-2H22v2h2V20h-2v2zM13 22v-6h3.5q.6 0 1.05.45T18 17.5v1q0 .575-.262.888t-.638.512L18 22h-1.5l-.9-2h-1.1v2zm1.5-3.5h2v-1h-2zM0 22v-6h1.5v2h2v-2H5v6H3.5v-2.5h-2V22zm6.5 0v-6H10q.6 0 1.05.45t.45 1.05v3q0 .6-.45 1.05T10 22zM8 20.5h2v-3H8z"></svg:path>`,
})
export class MaterialSymbolsHdrEnhancedSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrOffIcon],svg[material-symbols-hdr-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.8 22.6L1.4 4.2l1.4-1.4l18.4 18.35zm-.3-7.6l-.9-2h-1.1v1.65l-1.5-1.5V9h3.5q.6 0 1.05.45T21 10.5v1q0 .45-.262.813t-.638.587L21 15zm-2-3.5h2v-1h-2zm-3 .15L11.85 9H13q.6 0 1.05.45t.45 1.05zM3 15V9h1.5v2h2V9H8v6H6.5v-2.5h-2V15zm6.5-4.1l1.5 1.5v1.1h1.125l1.375 1.4q-.125.05-.25.075T13 15H9.5z"></svg:path>`,
})
export class MaterialSymbolsHdrOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrOffSelectIcon],svg[material-symbols-hdr-off-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.4 10.6l-8-8.05q.65-.3 1.3-.425T12 2q2.5 0 4.25 1.75T18 8q0 .65-.15 1.3t-.45 1.3m-1.15 4.45L14.6 13.4q-.575.3-1.262.45T12 14q-2.5 0-4.25-1.75T6 8q0-.725.15-1.375T6.6 5.4L4.95 3.75l1.4-1.4l11.3 11.3zM20.5 22v-2h-2v-1.5h2v-2H22v2h2V20h-2v2zM13 22v-6h3.5q.6 0 1.05.45T18 17.5v1q0 .575-.262.888t-.638.512L18 22h-1.5l-.9-2h-1.1v2zm1.5-3.5h2v-1h-2zM0 22v-6h1.5v2h2v-2H5v6H3.5v-2.5h-2V22zm6.5 0v-6H10q.6 0 1.05.45t.45 1.05v3q0 .6-.45 1.05T10 22zM8 20.5h2v-3H8zM20.5 22v-2h-2v-1.5h2v-2H22v2h2V20h-2v2zM13 22v-6h3.5q.6 0 1.05.45T18 17.5v1q0 .575-.262.888t-.638.512L18 22h-1.5l-.9-2h-1.1v2zm1.5-3.5h2v-1h-2zM0 22v-6h1.5v2h2v-2H5v6H3.5v-2.5h-2V22zm6.5 0v-6H10q.6 0 1.05.45t.45 1.05v3q0 .6-.45 1.05T10 22zM8 20.5h2v-3H8z"></svg:path>`,
})
export class MaterialSymbolsHdrOffSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrOnIcon],svg[material-symbols-hdr-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15V9h3.5q.6 0 1.05.45T21 10.5v1q0 .575-.262.888t-.638.512L21 15h-1.5l-.9-2h-1.1v2zm1.5-3.5h2v-1h-2zM3 15V9h1.5v2h2V9H8v6H6.5v-2.5h-2V15zm6.5 0V9H13q.6 0 1.05.45t.45 1.05v3q0 .6-.45 1.05T13 15zm1.5-1.5h2v-3h-2z"></svg:path>`,
})
export class MaterialSymbolsHdrOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrOnSelectIcon],svg[material-symbols-hdr-on-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14q-2.5 0-4.25-1.75T6 8t1.75-4.25T12 2t4.25 1.75T18 8t-1.75 4.25T12 14m8.5 8v-2h-2v-1.5h2v-2H22v2h2V20h-2v2zM13 22v-6h3.5q.6 0 1.05.45T18 17.5v1q0 .575-.262.888t-.638.512L18 22h-1.5l-.9-2h-1.1v2zm1.5-3.5h2v-1h-2zM0 22v-6h1.5v2h2v-2H5v6H3.5v-2.5h-2V22zm6.5 0v-6H10q.6 0 1.05.45t.45 1.05v3q0 .6-.45 1.05T10 22zM8 20.5h2v-3H8z"></svg:path>`,
})
export class MaterialSymbolsHdrOnSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrPlusIcon],svg[material-symbols-hdr-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 17.5H16V16h1.5v-1.5H16V13h-1.5v1.5H13V16h1.5zM7 12h1.5V9.5h2V12H12V6h-1.5v2h-2V6H7zm6 0h3q.6 0 1.05-.45t.45-1.05v-3q0-.6-.45-1.05T16 6h-3zm-2.5 3.5h-2v-1h2zm-.05 3.5H12l-.9-2.1q.375-.225.638-.587T12 15.5v-1q0-.625-.437-1.062T10.5 13H7v6h1.5v-2h1.1zm4.05-8.5v-3H16v3zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsHdrPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrPlusOffIcon],svg[material-symbols-hdr-plus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 10.5H16v-3h-1.5zm-6 5h2v-1h-2zM7 19h1.5v-2h1.1l.85 2H12l-.9-2.1q.375-.225.638-.587T12 15.5v-1q0-.625-.437-1.062T10.5 13H7zm0-7h1.5V9.9L7 8.4zm5 10q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-2.1.775-3.912t2.2-3.113l14.05 14.05q-1.275 1.425-3.087 2.2T12 22m8.5 1.3L.7 3.5l1.4-1.4l19.8 19.8zm-.15-5.8l-5.5-5.5H16q.6 0 1.05-.45t.45-1.05v-3q0-.6-.45-1.05T16 6h-3v4.15l-1-1V6h-1.5v1.65L6.475 3.625q1.175-.8 2.575-1.213T12 2q2.075 0 3.9.788t3.175 2.137T21.213 8.1T22 12q0 1.55-.425 2.938T20.35 17.5"></svg:path>`,
})
export class MaterialSymbolsHdrPlusOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrStrongIcon],svg[material-symbols-hdr-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16q-1.65 0-2.825-1.175T1 12t1.175-2.825T5 8t2.825 1.175T9 12t-1.175 2.825T5 16m0-2q.825 0 1.413-.587T7 12t-.587-1.412T5 10t-1.412.588T3 12t.588 1.413T5 14m12 4q-2.5 0-4.25-1.75T11 12t1.75-4.25T17 6t4.25 1.75T23 12t-1.75 4.25T17 18"></svg:path>`,
})
export class MaterialSymbolsHdrStrongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrWeakIcon],svg[material-symbols-hdr-weak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16q-1.65 0-2.825-1.175T1 12t1.175-2.825T5 8t2.825 1.175T9 12t-1.175 2.825T5 16m12 2q-2.5 0-4.25-1.75T11 12t1.75-4.25T17 6t4.25 1.75T23 12t-1.75 4.25T17 18m0-2q1.65 0 2.825-1.175T21 12t-1.175-2.825T17 8t-2.825 1.175T13 12t1.175 2.825T17 16"></svg:path>`,
})
export class MaterialSymbolsHdrWeakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeadMountedDeviceIcon],svg[material-symbols-head-mounted-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 18q-1.65 0-2.825-1.175T3.5 14V9.925q0-1.275.8-2.238T6.35 6.5q1.425-.275 2.825-.387T12 6t2.838.113t2.812.387q1.25.25 2.05 1.2t.8 2.225V14q0 1.65-1.175 2.825T16.5 18h-1q-.325 0-.65-.038t-.625-.162l-1.6-.55q-.3-.125-.625-.125t-.625.125l-1.6.55q-.3.125-.625.162T8.5 18zm0-2h1q.175 0 .338-.025t.312-.075q.725-.225 1.413-.475t1.437-.25t1.45.238t1.4.487q.15.05.313.075T15.5 16h1q.825 0 1.413-.587T18.5 14V9.925q0-.55-.35-.95t-.875-.525q-1.3-.275-2.613-.362T12 8t-2.65.1t-2.625.35q-.525.1-.875.513t-.35.962V14q0 .825.588 1.413T7.5 16M1 14v-4h1.5v4zm20.5 0v-4H23v4zm-14 2q-.825 0-1.412-.587T5.5 14V9.925q0-.55.35-.962t.875-.513Q8.05 8.2 9.35 8.1T12 8t2.663.088t2.612.362q.525.125.875.525t.35.95V14q0 .825-.587 1.413T16.5 16h-1q-.175 0-.337-.025t-.313-.075q-.7-.25-1.4-.488T12 15.176t-1.437.25t-1.413.475q-.15.05-.312.075T8.5 16z"></svg:path>`,
})
export class MaterialSymbolsHeadMountedDeviceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeadphonesIcon],svg[material-symbols-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21H5q-.825 0-1.412-.587T3 19v-7q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3t3.513.713t2.85 1.924t1.925 2.85T21 12v7q0 .825-.587 1.413T19 21h-4v-8h4v-1q0-2.925-2.037-4.962T12 5T7.038 7.038T5 12v1h4z"></svg:path>`,
})
export class MaterialSymbolsHeadphonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeadphonesBatteryIcon],svg[material-symbols-headphones-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18H4q-.825 0-1.412-.587T2 16v-4q0-2.5 1.75-4.25T8 6t4.25 1.75T14 12v4q0 .825-.587 1.413T12 18h-2v-5h2.5v-1q0-1.875-1.312-3.187T8 7.5T4.813 8.813T3.5 12v1H6zM18 7V6h2v1h1q.425 0 .713.288T22 8v9q0 .425-.288.713T21 18h-4q-.425 0-.712-.288T16 17V8q0-.425.288-.712T17 7z"></svg:path>`,
})
export class MaterialSymbolsHeadphonesBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeadsetMicIcon],svg[material-symbols-headset-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23v-2h7v-1h-4v-8h4v-1q0-2.9-2.05-4.95T12 4T7.05 6.05T5 11v1h4v8H5q-.825 0-1.412-.587T3 18v-7q0-1.85.713-3.488T5.65 4.65t2.863-1.937T12 2t3.488.713T18.35 4.65t1.938 2.863T21 11v10q0 .825-.587 1.413T19 23z"></svg:path>`,
})
export class MaterialSymbolsHeadsetMicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeadsetOffIcon],svg[material-symbols-headset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18.15L14.85 12H19v-1q0-2.95-2.05-4.975T12 4q-1.1 0-2.087.312T8.1 5.2L6.65 3.8q1.125-.875 2.487-1.338T12 2q1.85 0 3.488.7t2.862 1.925t1.938 2.863T21 11zM12 23v-2h6.175l-1-1H15v-2.175L5.525 8.35q-.225.6-.375 1.288T5 11v1h4v8H5q-.825 0-1.412-.587T3 18v-7q0-1.125.263-2.175t.762-2L.675 3.5L2.1 2.1l19.775 19.8V23z"></svg:path>`,
})
export class MaterialSymbolsHeadsetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHealingIcon],svg[material-symbols-healing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.45 21.4L2.6 18.55q-.575-.575-.575-1.4t.575-1.4L15.75 2.6q.575-.575 1.4-.575t1.4.575l2.85 2.85q.575.575.575 1.4t-.575 1.4L8.25 21.4q-.575.575-1.4.575t-1.4-.575m7.25-3.05l5.65-5.65l3.05 3.05q.575.575.575 1.4t-.575 1.4l-2.85 2.85q-.575.575-1.4.575t-1.4-.575zM12 15q.425 0 .713-.287T13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15m-2-2q.425 0 .713-.288T11 12t-.288-.712T10 11t-.712.288T9 12t.288.713T10 13m4 0q.425 0 .713-.288T15 12t-.288-.712T14 11t-.712.288T13 12t.288.713T14 13m-8.375-1.725L2.6 8.25q-.575-.575-.575-1.4t.575-1.4L5.45 2.6q.575-.575 1.4-.575t1.4.575l3.05 3.05zM12 11q.425 0 .713-.288T13 10t-.288-.712T12 9t-.712.288T11 10t.288.713T12 11"></svg:path>`,
})
export class MaterialSymbolsHealingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHealthAndBeautyIcon],svg[material-symbols-health-and-beauty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22q-.425 0-.712-.288T16 21t.288-.712T17 20h3v-2h-3q-.425 0-.712-.288T16 17t.288-.712T17 16h3v-2h-3q-.425 0-.712-.288T16 13t.288-.712T17 12h3v-2h-3q-.425 0-.712-.288T16 9t.288-.712T17 8h3V6h-3q-.425 0-.712-.288T16 5t.288-.712T17 4h4q.825 0 1.413.588T23 6v14q0 .825-.587 1.413T21 22zM5 22L1 11l5-3V2h4v6l5 3l-4 11z"></svg:path>`,
})
export class MaterialSymbolsHealthAndBeautyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHealthAndSafetyIcon],svg[material-symbols-health-and-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 15.5h3V13H16v-3h-2.5V7.5h-3V10H8v3h2.5zM12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22"></svg:path>`,
})
export class MaterialSymbolsHealthAndSafetyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHealthMetricsIcon],svg[material-symbols-health-metrics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22v-5H2v-4h6.45l1.7 2.55q.125.2.35.325t.475.125q.325 0 .6-.2t.375-.5l1.35-4.05l.85 1.3q.15.2.375.325T15 13h7v4h-5v5zm3.7-9.25l-.875-1.3q-.125-.2-.35-.325T9 11H2V7h5V2h10v5h5v4h-6.475l-1.7-2.55q-.125-.2-.35-.325T13 8q-.325 0-.587.2t-.363.5z"></svg:path>`,
})
export class MaterialSymbolsHealthMetricsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeapSnapshotLargeIcon],svg[material-symbols-heap-snapshot-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 18.5q.625 0 1.063-.437T16 17t-.437-1.062T14.5 15.5t-1.062.438T13 17t.438 1.063t1.062.437m-5.05-.05l6.5-6.5l-1.4-1.4l-6.5 6.5zm.05-4.95q.625 0 1.063-.437T11 12t-.437-1.062T9.5 10.5t-1.062.438T8 12t.438 1.063T9.5 13.5M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"></svg:path>`,
})
export class MaterialSymbolsHeapSnapshotLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeapSnapshotMultipleIcon],svg[material-symbols-heap-snapshot-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 11.5q.525 0 .888-.363t.362-.887t-.363-.888T11.25 9t-.888.363t-.362.887t.363.888t.887.362m.175 4.5L17 10.425L15.575 9L10 14.575zm4.325 0q.525 0 .888-.363T17 14.75t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362M19 19H8q-.825 0-1.412-.587T6 17V3q0-.825.588-1.412T8 1h7l6 6v10q0 .825-.587 1.413T19 19M14 8h5l-5-5zM4 23q-.825 0-1.412-.587T2 21V7h2v14h11v2z"></svg:path>`,
})
export class MaterialSymbolsHeapSnapshotMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeapSnapshotThumbnailIcon],svg[material-symbols-heap-snapshot-thumbnail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19q-.825 0-1.412-.587T1 17V7q0-.825.588-1.412T3 5h10q.825 0 1.413.588T15 7v10q0 .825-.587 1.413T13 19zm15-8q-.425 0-.712-.288T17 10V6q0-.425.288-.712T18 5h4q.425 0 .713.288T23 6v4q0 .425-.288.713T22 11zm0 8q-.425 0-.712-.288T17 18v-4q0-.425.288-.712T18 13h4q.425 0 .713.288T23 14v4q0 .425-.288.713T22 19zm-7.5-3q.625 0 1.063-.437T12 14.5t-.437-1.062T10.5 13t-1.062.438T9 14.5t.438 1.063T10.5 16m-5.05-.05l6.5-6.5l-1.4-1.4l-6.5 6.5zM5.5 11q.625 0 1.062-.437T7 9.5t-.437-1.062T5.5 8t-1.062.438T4 9.5t.438 1.063T5.5 11"></svg:path>`,
})
export class MaterialSymbolsHeapSnapshotThumbnailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHearingIcon],svg[material-symbols-hearing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22q1.55 0 2.538-.775t1.512-2.275q.425-1.25.813-1.75t1.787-1.6q1.55-1.25 2.45-2.825T17 9q0-2.975-2.013-4.987T10 2T5.012 4.013T3 9h2q0-2.125 1.438-3.562T10 4t3.563 1.438T15 9q0 1.7-.675 2.9T12.4 14.05q-1.3.95-2.025 1.85T9.3 17.85q-.35 1.1-.838 1.625T7 20q-.825 0-1.412-.587T5 18H3q0 1.65 1.175 2.825T7 22m10.8-5.25q1.475-1.5 2.338-3.488T21 9q0-2.3-.862-4.3T17.8 1.2l-1.45 1.4q1.25 1.25 1.95 2.888T19 9q0 1.85-.7 3.475t-1.95 2.875zM10 11.5q1.05 0 1.775-.737T12.5 9q0-1.05-.725-1.775T10 6.5t-1.775.725T7.5 9q0 1.025.725 1.763T10 11.5"></svg:path>`,
})
export class MaterialSymbolsHearingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHearingAidIcon],svg[material-symbols-hearing-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22q1.425 0 2.5-.85t1.55-2.25q.425-1.25.913-1.85t1.612-1.4q1.675-1.2 2.55-2.988T17 9q0-2.95-2.025-4.975T10 2T5.025 4.025T3 9h2q0-2.125 1.438-3.562T10 4t3.563 1.438T15 9q0 1.475-.7 2.838T12.325 14.1q-1.2.85-1.912 1.638t-1.138 2.137q-.275.875-.837 1.5T7 20q-.8 0-1.4-.587T5 18q0-.65.125-1.287t.4-1.163l1.7 1.35l2.5-4.4q1.525.125 2.65-.913T13.5 9q0-1.45-1.025-2.475T10 5.5q-1.625 0-2.662 1.225t-.788 2.8L2.425 13.1l1.5 1.2q-.5.8-.712 1.763T3 18q0 1.65 1.175 2.825T7 22m10.8-5.25q1.55-1.575 2.375-3.588T21 9q0-2.2-.825-4.212T17.8 1.2l-1.45 1.4q1.275 1.275 1.963 2.925T19 9q0 1.8-.687 3.438T16.35 15.35z"></svg:path>`,
})
export class MaterialSymbolsHearingAidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHearingAidDisabledIcon],svg[material-symbols-hearing-aid-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22q-1.65 0-2.825-1.175T3 18q0-.975.213-1.937t.712-1.763l-1.5-1.2L6.55 9.525q-.125-.675.038-1.3t.512-1.15l4.85 4.85q-.475.325-1.037.475t-1.188.1l-2.5 4.4l-1.7-1.35q-.275.525-.4 1.163T5 18q0 .825.6 1.413T7 20q.775 0 1.313-.5t.987-1.65q.275-.675.5-1.15t.5-.837t.625-.663t.825-.625L5.1 7.925q-.05.275-.075.538T5 9H3q0-.725.125-1.388T3.5 6.326l-2.1-2.1L2.8 2.8l18.4 18.4l-1.425 1.4l-6.625-6.625q-.5.4-.812.7t-.525.6t-.388.688t-.375.987q-.5 1.45-1.562 2.25T7 22m11.65-6.225l-1.425-1.425q.875-1.175 1.325-2.538T19 9q0-1.825-.687-3.475T16.35 2.6l1.45-1.4q1.55 1.575 2.375 3.588T21 9q0 1.825-.6 3.55t-1.75 3.225m-2.725-2.725l-1.45-1.45q.275-.575.4-1.225T15 9q0-2.125-1.437-3.562T10 4q-.65 0-1.275.163t-1.2.487L6.05 3.175Q6.925 2.6 7.925 2.3T10 2q2.975 0 4.988 2.013T17 9q0 1.125-.262 2.138t-.813 1.912m-2.7-2.7L8.65 5.775q.325-.125.663-.2T10 5.5q1.45 0 2.475 1.025T13.5 9q0 .35-.075.688t-.2.662"></svg:path>`,
})
export class MaterialSymbolsHearingAidDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHearingAidDisabledLeftIcon],svg[material-symbols-hearing-aid-disabled-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22q-1.425 0-2.5-.85t-1.55-2.25q-.425-1.25-.913-1.85t-1.612-1.4q-1.675-1.2-2.55-2.988T7 9q0-.5.075-1t.225-.95l1.675 1.675q-.05 1.55.663 2.988t2.037 2.387q1.2.85 1.913 1.638t1.137 2.137q.275.875.838 1.5T17 20q.65 0 1.163-.363t.762-.937l1.475 1.475q-.575.8-1.462 1.313T17 22m4-4.075L10.75 7.675q.4-.95 1.263-1.562T14 5.5q1.625 0 2.663 1.225t.787 2.825l4.1 3.55l-1.5 1.2q.475.725.713 1.65T21 17.925M19 9q0-2.125-1.437-3.562T14 4q-1.425 0-2.562.688T9.65 6.525l-1.475-1.45q.95-1.425 2.463-2.25T14 2q2.95 0 4.975 2.025T21 9zm.75 13.375L5.1 7.675q-.05.325-.075.65T5 9q0 1.8.688 3.438T7.65 15.35l-1.45 1.4q-1.55-1.575-2.375-3.588T3 9q0-.775.113-1.525T3.424 6L1.4 3.975L2.825 2.55l18.35 18.4z"></svg:path>`,
})
export class MaterialSymbolsHearingAidDisabledLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHearingAidLeftIcon],svg[material-symbols-hearing-aid-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22q-1.425 0-2.5-.85t-1.55-2.25q-.425-1.25-.913-1.85t-1.612-1.4q-1.675-1.2-2.55-2.988T7 9q0-2.95 2.025-4.975T14 2t4.975 2.025T21 9h-2q0-2.125-1.437-3.562T14 4t-3.562 1.438T9 9q0 1.475.7 2.838t1.975 2.262q1.2.85 1.912 1.638t1.138 2.137q.275.875.838 1.5T17 20q.8 0 1.4-.587T19 18q0-.65-.125-1.287t-.4-1.163l-1.7 1.35l-2.5-4.4q-1.525.125-2.65-.912T10.5 9q0-1.45 1.025-2.475T14 5.5q1.625 0 2.663 1.225t.787 2.8l4.125 3.575l-1.5 1.2q.5.8.713 1.763T21 18q0 1.65-1.175 2.825T17 22M6.2 16.75q-1.55-1.575-2.375-3.588T3 9q0-2.2.825-4.212T6.2 1.2l1.45 1.4Q6.375 3.875 5.687 5.525T5 9q0 1.8.688 3.438T7.65 15.35z"></svg:path>`,
})
export class MaterialSymbolsHearingAidLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHearingDisabledIcon],svg[material-symbols-hearing-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.475 23.3l-7.325-7.325q-.5.4-.812.7t-.525.6t-.388.688t-.375.987q-.5 1.45-1.562 2.25T7 22q-1.65 0-2.825-1.175T3 18h2q0 .825.588 1.413T7 20q.775 0 1.313-.5t.987-1.65q.275-.675.5-1.15t.5-.837t.625-.663t.825-.625L5.1 7.925q-.05.275-.075.538T5 9H3q0-.725.125-1.388T3.5 6.326L.675 3.5L2.1 2.075l19.8 19.8zm-1.825-7.525l-1.425-1.425q.875-1.175 1.325-2.537T19 9q0-1.825-.687-3.475T16.35 2.6l1.45-1.4q1.55 1.575 2.375 3.588T21 9q0 1.825-.6 3.55t-1.75 3.225m-2.725-2.725l-1.45-1.45q.275-.575.4-1.225T15 9q0-2.125-1.437-3.562T10 4q-.65 0-1.275.163t-1.2.487L6.05 3.175Q6.925 2.6 7.925 2.3T10 2q2.975 0 4.988 2.013T17 9q0 1.125-.262 2.138t-.813 1.912m-3.5-3.5l-3-3q.125-.05.275-.05h.3q1.05 0 1.775.725T12.5 9q0 .15-.012.288t-.063.262M10 11.5q-1.05 0-1.775-.737T7.5 9q0-.325.075-.625t.25-.575l3.4 3.4q-.275.15-.587.225T10 11.5"></svg:path>`,
})
export class MaterialSymbolsHearingDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeartBrokenIcon],svg[material-symbols-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.025 21.925q-3.35-3.375-5.337-5.45t-3.025-3.45t-1.35-2.35T2 8.5q0-2.3 1.6-3.9T7.5 3q1.125 0 2.175.412T11.55 4.6L10 10h3l-.85 8.375L15 9h-3l1.775-5.3q.625-.35 1.313-.525T16.5 3q2.3 0 3.9 1.6T22 8.5q0 1.2-.325 2.2T20.3 13.088t-3.025 3.45t-5.25 5.387"></svg:path>`,
})
export class MaterialSymbolsHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeartCheckIcon],svg[material-symbols-heart-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 21l-3.175-2.85q-1.8-1.625-3.088-2.9t-2.125-2.4t-1.225-2.175T1 8.475q0-2.35 1.575-3.912T6.5 3q1.3 0 2.475.538T11 5.075q.85-1 2.025-1.537T15.5 3q2.125 0 3.563 1.288T20.85 7.3q-.5-.2-1.05-.25T18.675 7q-2.125 0-3.9 1.713T13 13q0 1.2.525 2.438T15 17.45q-.475.425-1.237 1.088T12.45 19.7zm6.95-4.825L15.1 13.35l1.425-1.4l1.425 1.4l3.525-3.525l1.425 1.4z"></svg:path>`,
})
export class MaterialSymbolsHeartCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeartMinusIcon],svg[material-symbols-heart-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14v-2h8v2zm-4 7l-3.175-2.85q-1.8-1.625-3.088-2.9t-2.125-2.4t-1.225-2.175T1 8.475q0-2.35 1.575-3.912T6.5 3q1.3 0 2.475.538T11 5.075q.85-1 2.025-1.537T15.5 3q2.125 0 3.563 1.288T20.85 7.3q-.45-.175-.9-.262t-.875-.088q-2.525 0-4.3 1.763T13 13q0 1.3.525 2.463T15 17.45q-.475.425-1.237 1.088T12.45 19.7z"></svg:path>`,
})
export class MaterialSymbolsHeartMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeartPlusIcon],svg[material-symbols-heart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17v-3h-3v-2h3V9h2v3h3v2h-3v3zm-7 4l-3.175-2.85q-1.8-1.625-3.088-2.9t-2.125-2.4t-1.225-2.175T1 8.475q0-2.35 1.575-3.912T6.5 3q1.3 0 2.475.538T11 5.075q.85-1 2.025-1.537T15.5 3q2.125 0 3.563 1.288T20.85 7.3q-.45-.175-.9-.262t-.875-.088q-2.525 0-4.3 1.763T13 13q0 1.3.525 2.463T15 17.45q-.475.425-1.237 1.088T12.45 19.7z"></svg:path>`,
})
export class MaterialSymbolsHeartPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeatIcon],svg[material-symbols-heat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.3 20.725q-.15.125-.312.2t-.363.075t-.4-.088t-.35-.237q-1.025-1.1-1.513-2.25T9.876 16q0-.925.275-1.95t.95-2.65q.575-1.425.8-2.187t.225-1.413q0-.85-.375-1.587t-1.175-1.488q-.15-.15-.237-.35t-.088-.4t.075-.362t.2-.313q.15-.15.337-.225T11.25 3t.375.075t.325.2q1.1 1.025 1.637 2.15t.538 2.375q0 .875-.263 1.838t-.912 2.512q-.625 1.5-.85 2.3t-.225 1.525q0 .875.363 1.688T13.35 19.3q.125.15.2.325t.075.375t-.075.388t-.25.337m4.875 0q-.15.125-.312.2T17.5 21t-.4-.088t-.35-.237q-1.025-1.1-1.513-2.238t-.487-2.412q0-.925.275-1.975t.95-2.65q.575-1.425.8-2.175t.225-1.4q0-.85-.375-1.612T15.45 4.725q-.15-.15-.225-.337T15.15 4t.063-.363t.187-.312q.15-.15.35-.238t.4-.087t.363.075t.312.2q1.1 1.025 1.638 2.15T19 7.8q0 .875-.262 1.838t-.913 2.537q-.625 1.5-.85 2.3t-.225 1.5q0 .875.375 1.713t1.125 1.637q.125.15.187.325t.063.35q0 .2-.075.4t-.25.325m-9.75 0q-.15.125-.313.2T7.75 21t-.4-.088t-.35-.237q-1.025-1.1-1.513-2.238T5 16.025q0-.925.275-1.975t.95-2.65q.575-1.425.8-2.175t.225-1.4q0-.85-.375-1.612T5.7 4.725q-.175-.15-.25-.337T5.375 4t.075-.375t.2-.325q.15-.15.338-.225T6.375 3t.375.075t.325.2q1.1 1.025 1.638 2.138T9.25 7.8q0 .875-.25 1.838t-.9 2.512q-.625 1.5-.85 2.3t-.225 1.525q0 .875.363 1.713T8.5 19.325q.125.15.188.325t.062.35q0 .2-.075.4t-.25.325"></svg:path>`,
})
export class MaterialSymbolsHeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeatPumpIcon],svg[material-symbols-heat-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 16.95V13.8l-2.225 2.225q.5.35 1.063.575t1.162.35m1.5-.025q.6-.1 1.163-.325t1.062-.575L12.75 13.8zm3.275-1.95q.35-.5.563-1.062t.337-1.163H13.8zM13.8 11.25h3.125q-.125-.575-.338-1.137t-.562-1.063zm-1.05-1.05l2.225-2.225q-.5-.35-1.063-.575t-1.162-.35zM12 13q.425 0 .712-.287T13 12t-.288-.712T12 11t-.712.288T11 12t.288.713T12 13m-.75-2.8V7.075q-.6.1-1.162.325t-1.063.575zm-4.175 1.05H10.2l-2.225-2.2q-.35.5-.575 1.05t-.325 1.15m.9 3.725L10.2 12.75H7.05q.125.6.35 1.163t.575 1.062M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsHeatPumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeatPumpBalanceIcon],svg[material-symbols-heat-pump-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18.6q1.25 0 2.125-.875T10 15.6v-6q0-.425.288-.712T11 8.6t.713.288T12 9.6v6q0 1.25.875 2.125T15 18.6t2.125-.875T18 15.6v-7q0-.425.288-.712T19 7.6h1.175L19 8.75l1.4 1.425L24 6.6L20.4 3L19 4.425L20.175 5.6H19q-1.25 0-2.125.875T16 8.6v7q0 .425-.288.713T15 16.6t-.712-.288T14 15.6v-6q0-1.25-.875-2.125T11 6.6t-2.125.875T8 9.6v6q0 .425-.288.713T7 16.6t-.712-.288T6 15.6v-9H4v9q0 1.25.875 2.125T7 18.6m-4 3q-.825 0-1.412-.587T1 19.6v-8h22v8q0 .825-.587 1.413T21 21.6z"></svg:path>`,
})
export class MaterialSymbolsHeatPumpBalanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeightIcon],svg[material-symbols-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l-4-4l1.4-1.4l1.6 1.575V6.825L9.4 8.4L8 7l4-4l4 4l-1.4 1.425l-1.6-1.6v10.35l1.6-1.575L16 17z"></svg:path>`,
})
export class MaterialSymbolsHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHelicopterIcon],svg[material-symbols-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13V7Q6.5 7 4.75 8.75T3 13zm4 9H3v-2h10zm2-3H3q-.825 0-1.412-.587T1 17v-4q0-3.35 2.325-5.675T9 5h6v5h5l1-2h2v7l-8 .8zm4-15H3V2h16z"></svg:path>`,
})
export class MaterialSymbolsHelicopterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHelpIcon],svg[material-symbols-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHelpCenterIcon],svg[material-symbols-help-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18q.525 0 .888-.363t.362-.887t-.363-.888T12 15.5t-.888.363t-.362.887t.363.888T12 18m-.9-3.85h1.85q0-.9.2-1.325T14 11.75q.875-.875 1.237-1.463T15.6 8.95q0-1.325-.9-2.137T12.275 6q-1.375 0-2.337.675T8.6 8.55l1.65.65q.175-.675.7-1.087t1.225-.413q.675 0 1.125.363t.45.962q0 .425-.275.9t-.925 1.05q-.825.725-1.138 1.388T11.1 14.15M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsHelpCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHelpClinicIcon],svg[material-symbols-help-clinic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h2v-5h-2zm1-7q.425 0 .713-.288T13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10M4 21V9l8-6l8 6v12z"></svg:path>`,
})
export class MaterialSymbolsHelpClinicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHematologyIcon],svg[material-symbols-hematology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 23q-1.825 0-2.912-1.525T9 18t1.088-3.475T13 13t2.913 1.525T17 18t-1.088 3.475T13 23m-8.55-.7l-1.9-.6q.775-2.35 1.112-4.788T4 12t-.337-4.913T2.55 2.3l1.9-.6q.825 2.5 1.188 5.075T6 12t-.363 5.225T4.45 22.3m15.1 0q-.825-2.5-1.187-5.075T18 12t.363-5.225T19.55 1.7l1.9.6q-.775 2.35-1.112 4.788T20 12t.338 4.913T21.45 21.7zm-7.325-2.5q.225.2.525.2t.525-.225q.35-.35.538-.812T14 18t-.175-.962t-.525-.813Q13.1 16 12.787 16t-.537.2t-.238.525t.188.55l.15.213q.15.212.15.512t-.15.512l-.15.213q-.225.225-.213.55t.238.525M11 11q-1.825 0-2.912-1.525T7 6t1.088-3.475T11 1t2.913 1.525T15 6t-1.088 3.475T11 11m.75-3.2q.225-.2.238-.525t-.188-.55q-.125-.15-.213-.337T11.5 6t.088-.387t.212-.338q.2-.225.2-.537t-.225-.538Q11.55 4 11.25 4t-.525.225q-.35.35-.537.813T10 6t.175.963t.525.812q.225.225.525.225t.525-.2"></svg:path>`,
})
export class MaterialSymbolsHematologyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHevcIcon],svg[material-symbols-hevc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15V9h1.5v2h1V9H7v6H5.5v-2.5h-1V15zm5 0V9h3.5v1.5h-2v.5h2v1.5h-2v1h2V15zm5 0l-1-6h1.5l.75 4.5L15 9h1.5l-1 6zm5 0q-.425 0-.712-.288T17 14v-4q0-.425.288-.712T18 9h2q.425 0 .713.288T21 10v1h-1.5v-.5h-1v3h1V13H21v1q0 .425-.288.713T20 15z"></svg:path>`,
})
export class MaterialSymbolsHevcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHexagonIcon],svg[material-symbols-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.8 21l-5.2-9l5.2-9h10.4l5.2 9l-5.2 9z"></svg:path>`,
})
export class MaterialSymbolsHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHideIcon],svg[material-symbols-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.425 21L3 19.575L7.6 15H5v-2h6v6H9v-2.6zM13 11V5h2v2.6L19.575 3L21 4.425L16.4 9H19v2z"></svg:path>`,
})
export class MaterialSymbolsHideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHideImageIcon],svg[material-symbols-hide-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18.15L5.85 3H19q.825 0 1.413.588T21 5zm-1.2 4.45L18.2 21H5q-.825 0-1.412-.587T3 19V5.8L1.4 4.2l1.4-1.4l18.4 18.4zM6 17h8.175l-2.1-2.1l-.825 1.1L9 13z"></svg:path>`,
})
export class MaterialSymbolsHideImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHideSourceIcon],svg[material-symbols-hide-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L17.5 20.35q-1.225.8-2.612 1.225T12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-1.5.425-2.887T3.65 6.5L1.375 4.225L2.8 2.8l18.4 18.4zm.575-5.125L6.5 3.65q1.225-.8 2.613-1.225T12 2q2.075 0 3.9.788t3.175 2.137T21.213 8.1T22 12q0 1.5-.425 2.888T20.35 17.5"></svg:path>`,
})
export class MaterialSymbolsHideSourceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHighDensityIcon],svg[material-symbols-high-density-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V3h14v14zm0 4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3h2v2z"></svg:path>`,
})
export class MaterialSymbolsHighDensityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHighQualityIcon],svg[material-symbols-high-quality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 16.5h1.5V15H17q.425 0 .713-.288T18 14v-4q0-.425-.288-.712T17 9h-3q-.425 0-.712.288T13 10v4q0 .425.288.713T14 15h.75zM6 15h1.5v-2h2v2H11V9H9.5v2.5h-2V9H6zm8.5-1.5v-3h2v3zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsHighQualityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHighResIcon],svg[material-symbols-high-res-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 18.5H6v-2h.6l.9 2H9l-.9-2.1q.375-.225.638-.587T9 15v-1q0-.625-.437-1.062T7.5 12.5h-3zm5.5 0h4V17h-2.5v-.75h2v-1.5h-2V14H14v-1.5h-4zm5 0h3.5q.425 0 .713-.288t.287-.712V16q0-.425-.288-.712T18.5 15h-2v-1h3v-1.5H16q-.425 0-.712.288T15 13.5V15q0 .425.288.713T16 16h2v1h-3zM6 15v-1h1.5v1zm1.5-3.5H9V9.25h1.5v2.25H12v-6h-1.5v2.25H9V5.5H7.5zm7 0H16v-6h-1.5zM3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21z"></svg:path>`,
})
export class MaterialSymbolsHighResIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHighlightIcon],svg[material-symbols-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.65 8L3.5 5.9l1.4-1.45L7.05 6.6zM11 5V2h2v3zm7.4 3l-1.45-1.4l2.15-2.1l1.4 1.4zM9 22v-5l-3-3V9h12v5l-3 3v5z"></svg:path>`,
})
export class MaterialSymbolsHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHighlightKeyboardFocusIcon],svg[material-symbols-highlight-keyboard-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h2V7h-2zm1 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsHighlightKeyboardFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHighlightMouseCursorIcon],svg[material-symbols-highlight-mouse-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.9 21.95q-.225.05-.45.05H12q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v.45q0 .225-.05.45L20 12.3V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h.3zm7.625.55l-4.275-4.275L15 22l-3-10l10 3l-3.775 1.25l4.275 4.275z"></svg:path>`,
})
export class MaterialSymbolsHighlightMouseCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHighlightTextCursorIcon],svg[material-symbols-highlight-text-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-3-5h6v-2h-2V9h2V7H9v2h2v6H9z"></svg:path>`,
})
export class MaterialSymbolsHighlightTextCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHighlighterSize1Icon],svg[material-symbols-highlighter-size-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.7 18.7l-1.4-1.4Q5 17 5 16.588t.3-.713L15.875 5.3q.3-.3.713-.3t.712.3l1.4 1.4q.3.3.3.713t-.3.712L8.1 18.7q-.275.275-.7.275t-.7-.275"></svg:path>`,
})
export class MaterialSymbolsHighlighterSize1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHighlighterSize2Icon],svg[material-symbols-highlighter-size-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.05 19.05l-2.1-2.1q-.3-.3-.3-.712t.3-.713L15.525 4.95q.3-.3.713-.3t.712.3l2.1 2.125q.275.275.275.7t-.275.7L8.475 19.05q-.3.3-.712.3t-.713-.3"></svg:path>`,
})
export class MaterialSymbolsHighlighterSize2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHighlighterSize3Icon],svg[material-symbols-highlighter-size-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.75 19.75l-3.525-3.525q-.275-.275-.275-.7t.275-.7L14.8 4.225q.3-.3.725-.3t.7.3l3.525 3.55q.275.275.275.7t-.275.7L9.175 19.75q-.3.3-.712.3t-.713-.3"></svg:path>`,
})
export class MaterialSymbolsHighlighterSize3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHighlighterSize4Icon],svg[material-symbols-highlighter-size-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.825 20.825l-5.65-5.65q-.3-.3-.3-.712t.3-.713L13.75 3.175q.3-.3.713-.3t.687.3l5.675 5.65q.3.3.3.713t-.3.712L10.25 20.825q-.3.3-.712.3t-.713-.3"></svg:path>`,
})
export class MaterialSymbolsHighlighterSize4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHighlighterSize5Icon],svg[material-symbols-highlighter-size-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.25 22.25l-8.5-8.5q-.275-.275-.275-.7t.275-.7l10.6-10.6q.275-.275.688-.275t.712.3l8.5 8.475q.275.275.275.7t-.275.7l-10.6 10.6q-.275.275-.7.275t-.7-.275"></svg:path>`,
})
export class MaterialSymbolsHighlighterSize5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHikingIcon],svg[material-symbols-hiking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 23l3.075-15.55q.15-.725.675-1.088T11.85 6t1.063.25t.787.75l1 1.6q.45.725 1.163 1.313t1.637.862V9H19v14h-1.5V12.85q-1.2-.275-2.225-.875T13.5 10.5l-.6 3l2.1 2V23h-2v-6l-2.1-2l-1.8 8zm.425-9.875l-2.125-.4q-.4-.075-.625-.413t-.15-.762l.75-3.925q.15-.8.85-1.263t1.5-.312l1.15.225zM13.5 5.5q-.825 0-1.412-.587T11.5 3.5t.588-1.412T13.5 1.5t1.413.588T15.5 3.5t-.587 1.413T13.5 5.5"></svg:path>`,
})
export class MaterialSymbolsHikingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHistoryIcon],svg[material-symbols-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m2.8-4.8L11 12.4V7h2v4.6l3.2 3.2z"></svg:path>`,
})
export class MaterialSymbolsHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHistory2Icon],svg[material-symbols-history-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-3.875 0-6.725-2.575T2.05 13h2.025q.375 3.025 2.638 5.013T12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4Q9.85 4 8.012 5.062T5.1 8H8v2H2.2q.725-3.5 3.475-5.75T12 2q2.075 0 3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m2.8-5.8L11 12.4V7h2v4.6l3.2 3.2z"></svg:path>`,
})
export class MaterialSymbolsHistory2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHistoryEduIcon],svg[material-symbols-history-edu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20q-.825 0-1.412-.587T6 18v-3h3v-2.25q-.875-.05-1.662-.387T5.9 11.35v-1.1H4.75L1.5 7q.9-1.15 2.225-1.625T6.4 4.9q.675 0 1.313.1T9 5.375V4h12v13q0 1.25-.875 2.125T18 20zm3-5h6v2q0 .425.288.713T18 18t.713-.288T19 17V6h-8v.6l6 6V14h-1.4l-2.85-2.85l-.2.2q-.35.35-.737.625T11 12.4zM5.6 8.25h2.3v2.15q.3.2.625.275t.675.075q.575 0 1.038-.175t.912-.625l.2-.2l-1.4-1.4q-.725-.725-1.625-1.088T6.4 6.9q-.5 0-.95.075t-.9.225z"></svg:path>`,
})
export class MaterialSymbolsHistoryEduIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHistoryOffIcon],svg[material-symbols-history-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.625 16.775l-1.45-1.45q.4-.725.613-1.575T19 12q0-2.925-2.037-4.962T12 5q-.875 0-1.713.213T8.7 5.85L7.225 4.375q1.075-.65 2.288-1.012T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12q0 1.325-.363 2.525t-1.012 2.25M13 10.15l-2-2V7h2zm6.8 12.45l-3-3q-1.05.65-2.25 1.025T12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q.925 0 1.763-.213t1.587-.637L7.2 10H3V5.8L1.4 4.2l1.4-1.4l18.4 18.4z"></svg:path>`,
})
export class MaterialSymbolsHistoryOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHistoryToggleOffIcon],svg[material-symbols-history-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.3 16.7L11 12.4V7h2v4.6l3.7 3.7zm-12.45-.625q-.325-.725-.525-1.5T2.05 13h2.025q.075.525.212 1.05t.338 1.025zM2.05 11q.075-.8.275-1.588t.55-1.512l1.75 1q-.2.5-.337 1.025T4.074 11zm4.125 9.15q-.675-.5-1.25-1.088T3.85 17.8l1.75-1q.35.45.738.838t.837.737zm-.55-12.975l-1.775-1q.5-.675 1.075-1.25t1.25-1.075l1 1.775q-.425.35-.812.737t-.738.813M11 21.95q-.8-.075-1.588-.275t-1.512-.55l1-1.75q.5.2 1.025.338t1.075.212zM8.9 4.625l-1-1.75q.725-.35 1.513-.55T11 2.05v2.025q-.55.075-1.075.213T8.9 4.625M13 21.95v-2.025q.55-.075 1.075-.213t1.025-.337l1 1.75q-.725.35-1.513.55T13 21.95m2.1-17.325q-.5-.2-1.025-.337T13 4.075V2.05q.8.075 1.588.275t1.512.55zm2.725 15.525l-1-1.775q.425-.35.813-.737t.737-.813l1.775 1q-.5.675-1.075 1.263t-1.25 1.062m.55-12.975q-.35-.425-.737-.812t-.813-.738l1-1.775q.675.475 1.25 1.05t1.05 1.25zM19.925 11q-.075-.55-.213-1.075T19.376 8.9l1.75-1.025q.325.75.538 1.538T21.95 11zm1.2 5.1l-1.75-1q.2-.5.338-1.025T19.925 13h2.025q-.075.8-.275 1.588t-.55 1.512"></svg:path>`,
})
export class MaterialSymbolsHistoryToggleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHiveIcon],svg[material-symbols-hive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.275 11.5l-1.7-3l1.7-3h3.35l1.7 3l-1.7 3zm-5.95 3.5l-1.7-3l1.7-3h3.35l1.7 3l-1.7 3zm0-7l-1.7-3l1.7-3h3.35l1.7 3l-1.7 3zm-5.95 3.5l-1.7-3l1.7-3h3.35l1.625 3l-1.625 3zm0 7l-1.7-3l1.7-3h3.35l1.625 3l-1.625 3zm6.05 3.5l-1.8-3l1.7-3h3.35l1.7 3l-1.7 3zm5.85-3.5l-1.7-3l1.7-3h3.35l1.7 3l-1.7 3z"></svg:path>`,
})
export class MaterialSymbolsHiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHlsIcon],svg[material-symbols-hls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15V9h1.5v2h2V9H8v6H6.5v-2.5h-2V15zm7 0V9h1.5v4.5H14V15zm6.5 0q-.425 0-.712-.288T15.5 14v-1H17v.5h2v-1h-2.5q-.425 0-.712-.288T15.5 11.5V10q0-.425.288-.712T16.5 9h3q.425 0 .713.288T20.5 10v1H19v-.5h-2v1h2.5q.425 0 .713.288t.287.712V14q0 .425-.288.713T19.5 15z"></svg:path>`,
})
export class MaterialSymbolsHlsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHlsOffIcon],svg[material-symbols-hls-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.825 15l-2-2H17v.5h2v-1h-2.5q-.425 0-.712-.288T15.5 11.5V10q0-.425.288-.712T16.5 9h3q.425 0 .713.288T20.5 10v1H19v-.5h-2v1h2.5q.425 0 .713.288t.287.712V14q0 .425-.288.713T19.5 15zM3 15V9h1.5v2h2V9H8v6H6.5v-2.5h-2V15zm16.775 7.6L1.4 4.225L2.8 2.8l18.375 18.4zM10 15v-3.575l1.5 1.5v.575h.6l1.5 1.5z"></svg:path>`,
})
export class MaterialSymbolsHlsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHolidayVillageIcon],svg[material-symbols-holiday-village-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V10l6-6l6 6v10H9v-5H7v5zm5-7h2v-2H7zm9 7V9.175L10.825 4h2.825L18 8.35V20zm4 0V7.525L16.475 4H19.3L22 6.7V20z"></svg:path>`,
})
export class MaterialSymbolsHolidayVillageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeIcon],svg[material-symbols-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"></svg:path>`,
})
export class MaterialSymbolsHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeAndGardenIcon],svg[material-symbols-home-and-garden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-9.375L2.2 12l-1.175-1.575l11-8.425L23 10.425l-.4.525q-1.125-.775-2.475-.925t-2.625.35q-1.5-.575-3.088-.262t-2.787 1.512t-1.513 2.788t.263 3.087q-.25.6-.325 1.225T10.025 20zm13.5 2.375q-1.05.725-2.312.613t-2.163-1.013t-1.012-2.162t.612-2.313q-.725-1.05-.612-2.312t1.012-2.163t2.163-1.012t2.312.612q1.05-.725 2.313-.612t2.162 1.012t1.013 2.163t-.613 2.312q.725 1.05.613 2.313t-1.013 2.162t-2.162 1.013t-2.313-.613m0-3.625q.525 0 .888-.363t.362-.887t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362"></svg:path>`,
})
export class MaterialSymbolsHomeAndGardenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeAppLogoIcon],svg[material-symbols-home-app-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 21q-.625 0-1.062-.437T3 19.5v-1.9l4-3.55V21zM8 21v-4h8v4zm9 0v-8.2L12.725 9l3.025-2.675l4.75 4.225q.25.225.375.513t.125.612V19.5q0 .625-.437 1.063T19.5 21zM3 16.25v-4.575q0-.325.125-.625t.375-.5L11 3.9q.2-.2.463-.287T12 3.525t.538.088T13 3.9l2 1.775z"></svg:path>`,
})
export class MaterialSymbolsHomeAppLogoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeHealthIcon],svg[material-symbols-home-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17h3v-2.5H16v-3h-2.5V9h-3v2.5H8v3h2.5zM4 21V9l8-6l8 6v12z"></svg:path>`,
})
export class MaterialSymbolsHomeHealthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeImprovementAndToolsIcon],svg[material-symbols-home-improvement-and-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12l-3 4.2V10H9V6.2zm3 10h6v2H9zm0 4h6v3l-3 3l-3-3z"></svg:path>`,
})
export class MaterialSymbolsHomeImprovementAndToolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeIotDeviceIcon],svg[material-symbols-home-iot-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.025 10h1V6.5q0-.225-.137-.363T5.525 6t-.363.138t-.137.362zm.5 10q-1.875 0-3.187-1.3t-1.313-3.2q0-1.2.55-2.15t1.45-1.55V6.5q0-1.05.725-1.775T5.525 4t1.775.725t.725 1.775v5.3q.9.6 1.45 1.55t.55 2.15q0 1.875-1.312 3.188T5.525 20m8.175-5q-1.2-.825-1.95-2.125T11 10q0-2.5 1.75-4.25T17 4t4.25 1.75T23 10q0 1.575-.75 2.875T20.3 15zm3.3 5q-.6 0-1.05-.45t-.45-1.05h3q0 .6-.45 1.05T17 20m-3-2v-2h6v2z"></svg:path>`,
})
export class MaterialSymbolsHomeIotDeviceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeMaxIcon],svg[material-symbols-home-max-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20v-1H5q-1.65 0-2.825-1.175T1 15V9q0-1.65 1.175-2.825T5 5h14q1.65 0 2.825 1.175T23 9v6q0 1.65-1.175 2.825T19 19h-2v1z"></svg:path>`,
})
export class MaterialSymbolsHomeMaxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeMaxDotsIcon],svg[material-symbols-home-max-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20v-1H5q-1.65 0-2.825-1.175T1 15V9q0-1.65 1.175-2.825T5 5h14q1.65 0 2.825 1.175T23 9v6q0 1.65-1.175 2.825T19 19h-2v1zm3.5-7q.425 0 .713-.288T11.5 12t-.288-.712T10.5 11t-.712.288T9.5 12t.288.713t.712.287m-3 0q.425 0 .713-.288T8.5 12t-.288-.712T7.5 11t-.712.288T6.5 12t.288.713T7.5 13m6 0q.425 0 .713-.288T14.5 12t-.288-.712T13.5 11t-.712.288T12.5 12t.288.713t.712.287m3 0q.425 0 .713-.288T17.5 12t-.288-.712T16.5 11t-.712.288T15.5 12t.288.713t.712.287"></svg:path>`,
})
export class MaterialSymbolsHomeMaxDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeMiniIcon],svg[material-symbols-home-mini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5q1.9 0 3.7.463t3.2 1.35T21.15 9t.85 3H2q0-1.7.85-3T5.1 6.813t3.2-1.35T12 5M9 19q-2.35 0-4.187-1.388T2.3 14h19.4q-.675 2.225-2.512 3.613T15 19z"></svg:path>`,
})
export class MaterialSymbolsHomeMiniIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomePinIcon],svg[material-symbols-home-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13h2v-2.75h2V13h2V8.25l-3-2l-3 2zm3 9q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"></svg:path>`,
})
export class MaterialSymbolsHomePinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeRepairServiceIcon],svg[material-symbols-home-repair-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8h6V6H9zM2 20v-5h4v1h2v-1h8v1h2v-1h4v5zm0-6v-4q0-.825.588-1.412T4 8h3V6q0-.825.588-1.412T9 4h6q.825 0 1.413.588T17 6v2h3q.825 0 1.413.588T22 10v4h-4v-2h-2v2H8v-2H6v2z"></svg:path>`,
})
export class MaterialSymbolsHomeRepairServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeSpeakerIcon],svg[material-symbols-home-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.2 12l.775-5.825q.05-.275.213-.488t.412-.312l7.9-3.15q.45-.2.875.063t.475.762L17.925 12zm3.375 9Q7.75 21 6.55 19.638t-.95-3.163L5.925 14H18.15l.3 2.525q.2 1.8-.975 3.138T14.5 21z"></svg:path>`,
})
export class MaterialSymbolsHomeSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeStorageIcon],svg[material-symbols-home-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"></svg:path>`,
})
export class MaterialSymbolsHomeStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeWorkIcon],svg[material-symbols-home-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zM1 21V11l7-5l7 5v10h-5v-6H6v6zm16 0V10l-7-5.05V3h13v18z"></svg:path>`,
})
export class MaterialSymbolsHomeWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHorizontalDistributeIcon],svg[material-symbols-horizontal-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V2h2v20zm8.5-5V7h3v10zm9.5 5V2h2v20z"></svg:path>`,
})
export class MaterialSymbolsHorizontalDistributeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHorizontalRuleIcon],svg[material-symbols-horizontal-rule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13v-2h16v2z"></svg:path>`,
})
export class MaterialSymbolsHorizontalRuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHorizontalSplitIcon],svg[material-symbols-horizontal-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-6h18v6zm0-8V9h18v2zm0-4V5h18v2z"></svg:path>`,
})
export class MaterialSymbolsHorizontalSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHostIcon],svg[material-symbols-host-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h5q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zm11 0q-.825 0-1.412-.587T13 19V5q0-.825.588-1.412T15 3h5q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zM5 15h3v-2H5zm11 0h3v-2h-3zM5 12h3v-2H5zm11 0h3v-2h-3zM5 9h3V7H5zm11 0h3V7h-3z"></svg:path>`,
})
export class MaterialSymbolsHostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHotTubIcon],svg[material-symbols-hot-tub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8q-.825 0-1.412-.587T5 6t.588-1.412T7 4t1.413.588T9 6t-.587 1.413T7 8M4 22q-.825 0-1.412-.587T2 20v-8h3v-.75q0-.95.65-1.6T7.25 9q.5 0 .925.2t.775.55l1.4 1.55q.175.2.375.375t.425.325H22v8q0 .825-.587 1.413T20 22zm14-12l.1-.6q.125-.625-.088-1.213T17.35 7.15q-.725-.725-1.075-1.687T16.05 3.45L16.1 3H18l-.1.6q-.1.6.088 1.188T18.6 5.8q.75.75 1.113 1.725t.237 2.025l-.05.45zm-4 0l.1-.6q.125-.625-.088-1.213T13.35 7.15q-.725-.725-1.075-1.687T12.05 3.45L12.1 3H14l-.1.6q-.125.6.075 1.188T14.6 5.8q.75.75 1.113 1.725t.237 2.025l-.05.45zm3 10h2v-6h-2zm-4 0h2v-6h-2zm-4 0h2v-6H9zm-4 0h2v-6H5z"></svg:path>`,
})
export class MaterialSymbolsHotTubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHotelIcon],svg[material-symbols-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19V4h2v10h8V6h8q1.65 0 2.825 1.175T23 10v9h-2v-3H3v3zm6-6q-1.25 0-2.125-.875T4 10t.875-2.125T7 7t2.125.875T10 10t-.875 2.125T7 13"></svg:path>`,
})
export class MaterialSymbolsHotelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHotelClassIcon],svg[material-symbols-hotel-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.7 14.5l3.8-3.25l3 .25l-4.4 3.825L20.4 21l-2.55-1.55zm-2.35-7.3L13.3 4.75L14.45 2l2.3 5.425zM4.325 21l1.625-7.025L.5 9.25l7.2-.625L10.5 2l2.8 6.625l7.2.625l-5.45 4.725L16.675 21L10.5 17.275z"></svg:path>`,
})
export class MaterialSymbolsHotelClassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHourglassIcon],svg[material-symbols-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22v-2h2v-3q0-1.525.713-2.863T8.7 12q-1.275-.8-1.987-2.137T6 7V4H4V2h16v2h-2v3q0 1.525-.712 2.863T15.3 12q1.275.8 1.988 2.138T18 17v3h2v2z"></svg:path>`,
})
export class MaterialSymbolsHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHourglassArrowDownIcon],svg[material-symbols-hourglass-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 20v-2H4v-2.5q0-1.05.45-1.95T5.7 12q-.8-.65-1.25-1.55T4 8.5V6H2.5V4h12v2H13v2.5q0 1.05-.45 1.95T11.3 12q.8.65 1.25 1.55T13 15.5V18h1.5v2zm17 0L16 16.5l1.425-1.4l1.075 1.075V4h2v12.2l1.1-1.1l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsHourglassArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHourglassArrowUpIcon],svg[material-symbols-hourglass-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 20v-2H4v-2.5q0-1.05.45-1.95T5.7 12q-.8-.65-1.25-1.55T4 8.5V6H2.5V4h12v2H13v2.5q0 1.05-.45 1.95T11.3 12q.8.65 1.25 1.55T13 15.5V18h1.5v2zm16 0V7.8l-1.1 1.1L16 7.5L19.5 4L23 7.5l-1.425 1.4L20.5 7.825V20z"></svg:path>`,
})
export class MaterialSymbolsHourglassArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHourglassBottomIcon],svg[material-symbols-hourglass-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11q1.65 0 2.825-1.175T16 7V4H8v3q0 1.65 1.175 2.825T12 11M4 22v-2h2v-3q0-1.525.713-2.863T8.7 12q-1.275-.8-1.987-2.137T6 7V4H4V2h16v2h-2v3q0 1.525-.712 2.863T15.3 12q1.275.8 1.988 2.138T18 17v3h2v2z"></svg:path>`,
})
export class MaterialSymbolsHourglassBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHourglassDisabledIcon],svg[material-symbols-hourglass-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.475 23.3l-1.3-1.3H4v-2h2v-3q0-1.525.713-2.863T8.7 12q-.8-.5-1.362-1.2t-.913-1.55L.675 3.5L2.1 2.075l19.8 19.8zM15.05 12.15l-1.5-1.475q1.125-.475 1.788-1.475T16 7V4H8v1.125L6.875 4l-2-2H20v2h-2v3q0 1.6-.775 2.975T15.05 12.15M8 20h8v-1.175L10.475 13.3q-1.125.475-1.8 1.475T8 17zm10 0"></svg:path>`,
})
export class MaterialSymbolsHourglassDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHourglassEmptyIcon],svg[material-symbols-hourglass-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20h8v-3q0-1.65-1.175-2.825T12 13t-2.825 1.175T8 17zm4-9q1.65 0 2.825-1.175T16 7V4H8v3q0 1.65 1.175 2.825T12 11M4 22v-2h2v-3q0-1.525.713-2.863T8.7 12q-1.275-.8-1.987-2.137T6 7V4H4V2h16v2h-2v3q0 1.525-.712 2.863T15.3 12q1.275.8 1.988 2.138T18 17v3h2v2z"></svg:path>`,
})
export class MaterialSymbolsHourglassEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHourglassPauseIcon],svg[material-symbols-hourglass-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22v-2h2v-3q0-1.525.713-2.863T8.7 12q-1.275-.8-1.987-2.137T6 7V4H4V2h16v2h-2v3q0 1.2-.45 2.3t-1.275 1.925q-1.175.3-2.137.938T12.475 13.7t-1.087 2T11 18q0 1.075.325 2.1t.95 1.9zm14 1q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m-1.75-3h1v-4h-1zm2.5 0h1v-4h-1z"></svg:path>`,
})
export class MaterialSymbolsHourglassPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHourglassTopIcon],svg[material-symbols-hourglass-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20h8v-3q0-1.65-1.175-2.825T12 13t-2.825 1.175T8 17zm-4 2v-2h2v-3q0-1.525.713-2.863T8.7 12q-1.275-.8-1.987-2.137T6 7V4H4V2h16v2h-2v3q0 1.525-.712 2.863T15.3 12q1.275.8 1.988 2.138T18 17v3h2v2z"></svg:path>`,
})
export class MaterialSymbolsHourglassTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHouseIcon],svg[material-symbols-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"></svg:path>`,
})
export class MaterialSymbolsHouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHouseSidingIcon],svg[material-symbols-house-siding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V10.85L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.6l-2.8-2.15V21h-2v-3H7v3zm2-9h10v-2H7zm0 4h10v-2H7zm1.75-8h6.5L12 5.525z"></svg:path>`,
})
export class MaterialSymbolsHouseSidingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHouseWithShieldIcon],svg[material-symbols-house-with-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18q1.725-.425 2.863-1.987T16 12.55V10l-4-2l-4 2v2.55q0 1.9 1.138 3.463T12 18m-8 3V9l8-6l8 6v12z"></svg:path>`,
})
export class MaterialSymbolsHouseWithShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHouseboatIcon],svg[material-symbols-houseboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19v-2q.95 0 1.4-.5t1.925-.5q1.45 0 1.95.5t1.375.5q.95 0 1.413-.5T12 16t1.938.5t1.412.5q.875 0 1.375-.5t1.95-.5q1.475 0 1.925.5t1.4.5v2q-1.425 0-1.95-.5t-1.4-.5q-.9 0-1.4.5t-1.925.5q-1.475 0-1.925-.5T12 18t-1.4.5t-1.925.5q-1.425 0-1.925-.5t-1.4-.5q-.875 0-1.4.5T2 19m3.75-4q-.6 0-1.15-.225t-.975-.65L2.25 12.75l1.4-1.4l1.375 1.35q.15.15.337.225T5.75 13H7V9.625l-1.325.975L4.5 9L12 3.5L19.5 9l-1.175 1.625L17 9.65V13h1.25q.2 0 .388-.075t.337-.225l1.375-1.35l1.4 1.4l-1.375 1.375q-.425.425-.975.65T18.25 15zM11 13h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsHouseboatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHouseholdSuppliesIcon],svg[material-symbols-household-supplies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22q-.825 0-1.412-.587T6 20v-4.3q0-1.85.525-3.562t1.65-3.413Q7.225 8.5 6.613 7.7T6 5.9V4.85q0-1.2 1.038-2.012T9.2 2.15l8.9.875q.425.05.663.338t.237.662V7q0 .375-.262.663T18.1 8l-.9.1q.35 1.225.925 2.2t1.375 1.4l-1 1.75q-1.325-.775-2.05-2.137T15.3 8.275l-1.1.1q.2 1.25.763 2.525t1.137 2.3q.45.8.675 1.675T17 16.65V20q0 .825-.587 1.413T15 22zM8 5.1v.8q0 .45.325.725t.775.225L17 6.1V4.9l-7.9-.75q-.45-.05-.775.225T8 5.1"></svg:path>`,
})
export class MaterialSymbolsHouseholdSuppliesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHovIcon],svg[material-symbols-hov-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22L6 12l6-10l6 10z"></svg:path>`,
})
export class MaterialSymbolsHovIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHowToRegIcon],svg[material-symbols-how-to-reg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.55 20.4l-3.45-3.45l1.4-1.4l2.05 2.05l5.05-5.05l1.4 1.4zM10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m2.85 1.3L9.2 16.95L12.25 20H2v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 13q.75 0 1.463.075t1.387.225"></svg:path>`,
})
export class MaterialSymbolsHowToRegIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHowToVoteIcon],svg[material-symbols-how-to-vote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20v-4.55l2.75-3.125l1.425 1.425l-2 2.25h13.65l-1.95-2.2l1.425-1.425L21 15.45V20q0 .825-.587 1.413T19 22zm5.6-7.6l-3.475-3.525Q6.55 10.3 6.55 9.45t.575-1.425l4.9-4.9q.575-.575 1.425-.575t1.425.575L18.4 6.6q.575.575.588 1.412t-.563 1.413l-5 5q-.575.575-1.412.563T10.6 14.4M17 8l-3.55-3.5L8.5 9.45l3.55 3.5z"></svg:path>`,
})
export class MaterialSymbolsHowToVoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHrRestingIcon],svg[material-symbols-hr-resting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2h18v2zm2.425-9.6q-.725-.675-1.062-1.6t-.338-1.9q0-2.025 1.388-3.463T8.8 3q.9 0 1.725.325t1.475.95q.65-.625 1.475-.95T15.2 3q2.025 0 3.413 1.45T20 7.925q0 .975-.363 1.863T18.6 11.375l-5.225 5.075q-.275.275-.625.413T12 17t-.75-.137t-.625-.413z"></svg:path>`,
})
export class MaterialSymbolsHrRestingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHtmlIcon],svg[material-symbols-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 15V9h1.5v2h2V9H5v6H3.5v-2.5h-2V15zm7.75 0v-4.5H6V9h5v1.5H9.25V15zM12 15v-5q0-.425.288-.712T13 9h4.5q.425 0 .713.288T18.5 10v5H17v-4.5h-1V14h-1.5v-3.5h-1V15zm8 0V9h1.5v4.5H24V15z"></svg:path>`,
})
export class MaterialSymbolsHtmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHttpIcon],svg[material-symbols-http-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V9h1.5v2h2V9H6v6H4.5v-2.5h-2V15zm7.5 0v-4.5H7V9h4.5v1.5H10V15zm5.5 0v-4.5h-1.5V9H17v1.5h-1.5V15zm4 0V9h3.5q.6 0 1.05.45T23 10.5v1q0 .6-.45 1.05T21.5 13h-2v2zm1.5-3.5h2v-1h-2z"></svg:path>`,
})
export class MaterialSymbolsHttpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHubIcon],svg[material-symbols-hub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 23q-1.25 0-2.125-.875T3 20t.875-2.125T6 17q.35 0 .65.075t.575.2L8.65 15.5q-.7-.775-.975-1.75T7.55 11.8l-2.025-.675q-.425.625-1.075 1T3 12.5q-1.25 0-2.125-.875T0 9.5t.875-2.125T3 6.5t2.125.875T6 9.5v.2l2.025.7q.5-.9 1.338-1.525t1.887-.8V5.9q-.975-.275-1.612-1.063T9 3q0-1.25.875-2.125T12 0t2.125.875T15 3q0 1.05-.65 1.838T12.75 5.9v2.175q1.05.175 1.888.8t1.337 1.525L18 9.7v-.2q0-1.25.875-2.125T21 6.5t2.125.875T24 9.5t-.875 2.125T21 12.5q-.8 0-1.463-.375t-1.062-1l-2.025.675q.15.975-.125 1.938T15.35 15.5l1.425 1.75q.275-.125.575-.187T18 17q1.25 0 2.125.875T21 20t-.875 2.125T18 23t-2.125-.875T15 20q0-.5.163-.962t.437-.838l-1.425-1.775Q13.15 17 11.988 17T9.8 16.425L8.4 18.2q.275.375.438.838T9 20q0 1.25-.875 2.125T6 23"></svg:path>`,
})
export class MaterialSymbolsHubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHumerusIcon],svg[material-symbols-humerus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.05 22q-1.275 0-2.162-.875T6 18.975q0-.6.238-1.15t.662-.975l2.125-2.075V11q-.025-.35-.3-.575T8.15 10q-1.125-.85-1.638-1.75T6 6.25q0-1.775 1.313-3.012T10.5 2q.425 0 .813.113t.687.262q.325.125.538.25t.437.125q.5 0 1-.35q.275-.15.575-.275T15.225 2q1.2 0 1.988.838T18 4.874q0 .575-.238 1.163T17.05 7.1l-2.025 2.075v5.575l2.1 2.1q.425.425.65.975t.225 1.15q0 1.275-.862 2.15T15 22q-.6 0-1.15-.225t-.975-.65q-.175-.175-.387-.262t-.463-.088t-.462.088t-.388.262q-.425.425-.975.65T9.05 22"></svg:path>`,
})
export class MaterialSymbolsHumerusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHumerusAltIcon],svg[material-symbols-humerus-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.775L7.5 4q1.875.925 3.475 2.538t2.4 3.362q.9-.95 1.988-1.525T18.4 7.3q1.15-.325 1.988-.625T22 6v9.65l-7.5 4.725q-.475.3-1.012.463T12.35 21q-.75 0-1.45-.288T9.625 19.9zM10 16q.425 0 .713-.288T11 15v-.1q0-.05-.025-.1q.425 0 .725-.288t.3-.712t-.288-.712T11 12.8q-.2 0-.387.088t-.313.212l-2.575-2.9q.125-.125.2-.312T8 9.5q0-.425-.288-.712T7 8.5t-.712.288T6 9.5v.1q0 .05.025.1q-.425 0-.725.288T5 10.7t.288.713T6 11.7q.225 0 .413-.087t.312-.238l2.575 2.9q-.15.125-.225.325T9 15q0 .425.288.713T10 16"></svg:path>`,
})
export class MaterialSymbolsHumerusAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHumidityHelperIcon],svg[material-symbols-humidity-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22q-3.325 0-5.663-2.3T2 14.1q0-1.575.613-3.012T4.35 8.55L10 3l5.65 5.55q1.125 1.1 1.738 2.538T18 14.1q0 3.3-2.337 5.6T10 22Zm8.5-12q0-1.875-1.313-3.188T14 5.5q1.875 0 3.188-1.313T18.5 1q0 1.875 1.313 3.188T23 5.5q-1.875 0-3.188 1.313T18.5 10Z"></svg:path>`,
})
export class MaterialSymbolsHumidityHelperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHumidityHighIcon],svg[material-symbols-humidity-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.5q-3.325 0-5.663-2.3T4 13.6q0-1.575.613-3.012T6.35 8.05l4.25-4.175q.3-.275.663-.425T12 3.3t.738.15t.662.425l4.25 4.175q1.125 1.1 1.738 2.538T20 13.6q0 3.3-2.337 5.6T12 21.5"></svg:path>`,
})
export class MaterialSymbolsHumidityHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHumidityIndoorIcon],svg[material-symbols-humidity-indoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.025 16.5q1.65 0 2.813-1.15T16 12.55q0-.8-.3-1.513t-.875-1.262L12 7L9.175 9.775q-.575.55-.875 1.263T8 12.55q0 1.65 1.188 2.8t2.837 1.15M10 12.5q0-.375.15-.7t.425-.6L12 9.8l1.425 1.4q.275.275.425.6t.15.7zM4 20V8l8-6l8 6v12z"></svg:path>`,
})
export class MaterialSymbolsHumidityIndoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHumidityLowIcon],svg[material-symbols-humidity-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.5q-3.325 0-5.663-2.3T4 13.6q0-1.575.613-3.012T6.35 8.05l4.25-4.175q.3-.275.663-.425T12 3.3t.738.15t.662.425l4.25 4.175q1.125 1.1 1.738 2.538T20 13.6q0 3.3-2.337 5.6T12 21.5m0-2q2.5 0 4.25-1.713T18 13.6q0-1.175-.45-2.237T16.25 9.5L12 5.3L7.75 9.5q-.85.8-1.3 1.863T6 13.6q0 2.475 1.75 4.188T12 19.5"></svg:path>`,
})
export class MaterialSymbolsHumidityLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHumidityMidIcon],svg[material-symbols-humidity-mid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.5q-3.325 0-5.663-2.3T4 13.6q0-1.575.613-3.012T6.35 8.05l4.25-4.175q.3-.275.663-.425T12 3.3t.738.15t.662.425l4.25 4.175q1.125 1.1 1.738 2.538T20 13.6q0 3.3-2.337 5.6T12 21.5m-6-7.9h12q0-1.175-.45-2.237T16.25 9.5L12 5.3L7.75 9.5q-.85.8-1.3 1.863T6 13.6"></svg:path>`,
})
export class MaterialSymbolsHumidityMidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHumidityPercentageIcon],svg[material-symbols-humidity-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 18q.625 0 1.063-.437T16 16.5t-.437-1.062T14.5 15t-1.062.438T13 16.5t.438 1.063T14.5 18m-5.05-.05l6.5-6.5l-1.4-1.4l-6.5 6.5zM9.5 13q.625 0 1.063-.437T11 11.5t-.437-1.062T9.5 10t-1.062.438T8 11.5t.438 1.063T9.5 13m2.5 9q-3.425 0-5.712-2.35T4 13.8q0-2.5 1.988-5.437T12 2q4.025 3.425 6.013 6.363T20 13.8q0 3.5-2.287 5.85T12 22"></svg:path>`,
})
export class MaterialSymbolsHumidityPercentageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHvacIcon],svg[material-symbols-hvac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18q2.5 0 4.25-1.75T18 12t-1.75-4.25T12 6T7.75 7.75T6 12t1.75 4.25T12 18m0-2q-.725 0-1.4-.262T9.375 15h5.25q-.55.475-1.225.738T12 16m-3.45-2q-.2-.35-.325-.725T8.05 12.5h7.9q-.05.4-.175.775T15.45 14zm-.5-2.5q.05-.4.175-.775T8.55 10h6.9q.2.35.325.725t.175.775zM9.375 9q.55-.475 1.225-.737T12 8t1.4.262T14.625 9zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsHvacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHvacMaxDefrostIcon],svg[material-symbols-hvac-max-defrost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22v-6h1.3L6 20.55h.05L7.8 16h1.25v6h-.925v-3.35l.05-1.1h-.05L6.425 22H5.65l-1.7-4.45H3.9l.05 1.1V22zm6.875 0l2.25-6H13.2l2.25 6H14.4l-.55-1.525h-2.425L10.9 22zm5.875 0l1.975-3.125L15.875 16h1.15l1.325 2.15h.05L19.7 16h1.15L19 18.875L21 22h-1.15l-1.45-2.325h-.05L16.875 22zm-4-2.4h1.775l-.85-2.5h-.05zM12 2q2.5 0 5.213.4t5.937 1.275l-1.8 9.525l-1.95-.375l1.45-7.675q-2.6-.6-4.75-.875T12 4t-4.1.275t-4.75.875l1.45 7.675l-1.95.375l-1.8-9.525Q4.075 2.8 6.787 2.4T12 2m5.025 12.55l-1.65-1.1l.325-.525q.15-.225.225-.462T16 11.95q0-.35-.125-.675T15.5 10.7q-.525-.525-.813-1.212T14.4 8.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18 11.95q0 .575-.162 1.1t-.463 1zm-4.2 0l-1.65-1.1l.325-.525q.15-.225.225-.462t.075-.513q0-.35-.125-.675T11.3 10.7q-.525-.525-.813-1.212T10.2 8.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.212.463t-.063.512q0 .35.125.675t.375.575q.525.525.813 1.213t.287 1.437q0 .575-.162 1.1t-.463 1zm-4.175 0l-1.675-1.1l.35-.525q.15-.225.225-.462t.075-.513q0-.35-.138-.675T7.1 10.7q-.525-.525-.812-1.212T6 8.05q0-.575.15-1.1t.475-1l.35-.5l1.675 1.1l-.35.525q-.15.2-.225.45T8 8.05q0 .35.125.675T8.5 9.3q.525.525.813 1.213T9.6 11.95q0 .575-.162 1.1t-.463 1z"></svg:path>`,
})
export class MaterialSymbolsHvacMaxDefrostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIceSkatingIcon],svg[material-symbols-ice-skating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-2h4v-2H3V3h8v3H8.5q-.2 0-.35.15T8 6.5t.15.35t.35.15h2.55v1H8.5q-.2 0-.35.15T8 8.5t.15.35t.35.15h2.9q.35.575.888.975t1.187.6l2.625.725q1.3.35 2.1 1.412t.8 2.413V18h-3v2h2q1.25 0 2.125-.875T21 17h2q0 2.075-1.463 3.538T18 22zm6-2h6v-2H8z"></svg:path>`,
})
export class MaterialSymbolsIceSkatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIcecreamIcon],svg[material-symbols-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.05 23l-4.7-9q-1.775.075-3.062-1.025T3 10q0-1.275.738-2.3T5.6 6.25q.45-2.275 2.238-3.763T12 1t4.163 1.488T18.4 6.25q1.125.425 1.863 1.45T21 10q0 1.875-1.325 2.975T16.7 14zm0-4.35l2.7-5.25q-.6.3-1.3.45T12 14q-.675 0-1.362-.15T9.3 13.4z"></svg:path>`,
})
export class MaterialSymbolsIcecreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIdCardIcon],svg[material-symbols-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13h5v-2h-5zm0-3h5V8h-5zm-9 6h8v-.55q0-1.125-1.1-1.787T9 13t-2.9.663T5 15.45zm4-4q.825 0 1.413-.587T11 10t-.587-1.412T9 8t-1.412.588T7 10t.588 1.413T9 12m-5 8q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsIdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIdentityAwareProxyIcon],svg[material-symbols-identity-aware-proxy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2h18v2zM3 5V3h18v2zm0 4V7h2v2zm16 0V7h2v2zM3 17v-2h2v2zm16 0v-2h2v2zM8 17v-4H3v-2h5V7h8v4h5v2h-5v4z"></svg:path>`,
})
export class MaterialSymbolsIdentityAwareProxyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIdentityPlatformIcon],svg[material-symbols-identity-platform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20.175l5.6-3.425q-1.25-.875-2.675-1.312T12 15t-2.937.438t-2.713 1.287zM12 13q1.45 0 2.475-1.025T15.5 9.5t-1.025-2.475T12 6T9.525 7.025T8.5 9.5t1.025 2.475T12 13m0 9.5L3 17V7l9-5.5L21 7v10z"></svg:path>`,
})
export class MaterialSymbolsIdentityPlatformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIflIcon],svg[material-symbols-ifl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17.5q.625 0 1.063-.437T17.5 16t-.437-1.062T16 14.5t-1.062.438T14.5 16t.438 1.063T16 17.5m-4-4q.625 0 1.063-.437T13.5 12t-.437-1.062T12 10.5t-1.062.438T10.5 12t.438 1.063T12 13.5m-4-4q.625 0 1.063-.437T9.5 8t-.437-1.062T8 6.5t-1.062.438T6.5 8t.438 1.063T8 9.5M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsIflIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIframeIcon],svg[material-symbols-iframe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15v-5h8v5zm-6 5q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4z"></svg:path>`,
})
export class MaterialSymbolsIframeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIframeOffIcon],svg[material-symbols-iframe-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.45 23.3l-3.3-3.3H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4v2.85L.65 3.5l1.425-1.425l19.8 19.8zM4 18h11.15l-10-10H4zm17.775.925L20 17.15V8h-9.15l-4-4H20q.825 0 1.413.588T22 6v12q0 .25-.05.488t-.175.437M18 15.15L12.85 10H18z"></svg:path>`,
})
export class MaterialSymbolsIframeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImageIcon],svg[material-symbols-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-4h12l-3.75-5l-3 4L9 13z"></svg:path>`,
})
export class MaterialSymbolsImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImageArrowUpIcon],svg[material-symbols-image-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.8q-.4.675-.6 1.438T13 6q0 2.5 1.75 4.25T19 12q.525 0 1.025-.088T21 11.65V19q0 .825-.587 1.413T19 21zm1-4h12l-3.75-5l-3 4L9 13zm12-7V5.825L16.4 7.4L15 6l4-4l4 4l-1.4 1.4L20 5.825V10z"></svg:path>`,
})
export class MaterialSymbolsImageArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImageAspectRatioIcon],svg[material-symbols-image-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h2v-2H6zm4 0h2v-2h-2zm4 4h2v-2h-2zm0-4h2v-2h-2zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsImageAspectRatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImageNotSupportedIcon],svg[material-symbols-image-not-supported-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.475 23.3l-2.3-2.3H5q-.825 0-1.413-.588T3 19V5.825L.7 3.5l1.4-1.4l19.8 19.8l-1.425 1.4ZM6 17h8.175l-2.325-2.325l-.85 1.05L9 13l-3 4Zm15 1.175L5.825 3H19q.825 0 1.413.588T21 5v13.175Z"></svg:path>`,
})
export class MaterialSymbolsImageNotSupportedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImageSearchIcon],svg[material-symbols-image-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h5.6q-.5.8-.75 1.675T9.6 6.5q0 2.725 1.888 4.613T16.05 13q.525 0 1.013-.075t.962-.225L21 15.675V19q0 .825-.587 1.413T19 21zm16.55-7.6l-3.1-3.1q-.525.35-1.125.525T16.05 11q-1.85 0-3.15-1.312T11.6 6.5t1.313-3.187T16.1 2t3.188 1.313T20.6 6.5q0 .675-.2 1.3t-.5 1.15L22.95 12zM16.1 9q1.05 0 1.775-.725T18.6 6.5t-.725-1.775T16.1 4t-1.775.725T13.6 6.5t.725 1.775T16.1 9M6 17h12l-3.075-4.1q-.275-.05-.562-.125T13.8 12.6L11.25 16L9 13z"></svg:path>`,
})
export class MaterialSymbolsImageSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImagesearchRollerIcon],svg[material-symbols-imagesearch-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 23h-4q-.425 0-.712-.288T10 22v-6q0-.425.288-.712T11 15h1v-3H4q-.825 0-1.412-.587T2 10V6q0-.825.588-1.412T4 4h2V3q0-.425.288-.712T7 2h12q.425 0 .713.288T20 3v4q0 .425-.288.713T19 8H7q-.425 0-.712-.288T6 7V6H4v4h8q.825 0 1.413.588T14 12v3h1q.425 0 .713.288T16 16v6q0 .425-.288.713T15 23"></svg:path>`,
})
export class MaterialSymbolsImagesearchRollerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImagesmodeIcon],svg[material-symbols-imagesmode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-4h12l-3.75-5l-3 4L9 13zm2.5-7q.625 0 1.063-.437T10 8.5t-.437-1.062T8.5 7t-1.062.438T7 8.5t.438 1.063T8.5 10"></svg:path>`,
})
export class MaterialSymbolsImagesmodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImmunologyIcon],svg[material-symbols-immunology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.025 22q-1.5 0-3.75-.413t-3.6-1.437q-.75-.575-1.575-1.8t-1.512-2.675t-1.138-2.9T1 10.3q0-2.125 1.45-3.463t3.1-2.412q1.5-.975 3.325-1.7T12.65 2t3.538.75t3.162 1.825q.375.25.975.75t1.188 1.25t1.025 1.763T23 10.65q.05 1.85-.763 3.863t-2.2 3.675t-3.212 2.737t-3.8 1.075m-2.675-4q1.35 0 2.225-.95t.875-2.15q0-.55-.225-1.088t-.725-.987q-.55-.5-.9-1.1t-.525-1.325q-.25-1.1-1.088-1.75T8.1 8q-1.225 0-2.162.938T5 11.1q0 .975.413 2.175t1.137 2.25t1.7 1.763t2.1.712m0-2q-.675 0-1.275-.562T8.013 14.1t-.738-1.612T7 11.1q0-.425.338-.762T8.1 10q.3 0 .613.213t.437.637q.275 1.05.738 1.888T11.15 14.3q.15.125.225.3t.075.35q0 .4-.3.725t-.8.325m5.9-3q.425 0 .713-.288T17.25 12v-.25l.25.125q.375.2.763.088t.587-.463q.225-.35.125-.763t-.475-.612L18.25 10l.25-.125q.375-.2.463-.6T18.85 8.5q-.2-.35-.588-.45t-.762.1l-.25.125V8q0-.425-.288-.712T16.25 7t-.712.288T15.25 8v.275l-.225-.125q-.35-.2-.75-.088t-.625.463q-.2.35-.112.775t.487.6l.225.1l-.225.15q-.35.225-.462.613t.087.737q.2.375.613.475t.762-.1l.225-.125V12q0 .425.288.713t.712.287"></svg:path>`,
})
export class MaterialSymbolsImmunologyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImportContactsIcon],svg[material-symbols-import-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17.05q1.1-.525 2.213-.788T17.5 16q.9 0 1.763.15T21 16.6V6.7q-.825-.35-1.713-.525T17.5 6q-1.175 0-2.325.3T13 7.2zM12 20q-1.2-.95-2.6-1.475T6.5 18q-1.05 0-2.062.275T2.5 19.05q-.525.275-1.012-.025T1 18.15V6.1q0-.275.138-.525T1.55 5.2q1.175-.575 2.413-.888T6.5 4q1.45 0 2.838.375T12 5.5q1.275-.75 2.663-1.125T17.5 4q1.3 0 2.538.313t2.412.887q.275.125.413.375T23 6.1v12.05q0 .575-.487.875t-1.013.025q-.925-.5-1.937-.775T17.5 18q-1.5 0-2.9.525T12 20"></svg:path>`,
})
export class MaterialSymbolsImportContactsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImportantDevicesIcon],svg[material-symbols-important-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21q-.425 0-.712-.288T16 20v-7.95q0-.425.288-.712T17 11.05h4q.425 0 .713.288t.287.712V20q0 .425-.288.713T21 21zm0-2h4v-5.95h-4zm-8.3-5.25L11 12l2.3 1.75l-.85-2.85l2.3-1.85H11.9l-.9-2.8l-.9 2.8H7.25l2.3 1.85zM8 21v-2h2v-2H4q-.825 0-1.412-.587T2 15V5q0-.825.588-1.412T4 3h14q.825 0 1.413.588T20 5v4.05h-3q-1.25 0-2.125.875T14 12.05V17h-2v2h2v2z"></svg:path>`,
})
export class MaterialSymbolsImportantDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInHomeModeIcon],svg[material-symbols-in-home-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.925 22L10.7 17.75l1.4-1.425l2.825 2.825L20.6 13.5l1.4 1.425zM4 20v-9.375L2.2 12l-1.175-1.575L12 2l11 8.4l-1.2 1.6l-1.475-1.1l-5.4 5.425L12.1 13.5l-4.275 4.3L10 20z"></svg:path>`,
})
export class MaterialSymbolsInHomeModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInactiveOrderIcon],svg[material-symbols-inactive-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.25 20h1v-4h-1zm2.5 0h1v-4h-1zM6 9h12V7H6zm12 14q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M3 22V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v6.675q-.7-.35-1.463-.513T18 11H6v2h7.1q-.425.425-.787.925T11.675 15H6v2h5.075q-.05.25-.062.488T11 18q0 1.05.288 2.013t.862 1.837L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5z"></svg:path>`,
})
export class MaterialSymbolsInactiveOrderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInboxIcon],svg[material-symbols-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm7-5q.95 0 1.725-.55T14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45T12 16"></svg:path>`,
})
export class MaterialSymbolsInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInboxCustomizeIcon],svg[material-symbols-inbox-customize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.025 21l-.3-1.5q-.3-.125-.562-.262t-.538-.338l-1.45.45l-1-1.7l1.15-1q-.05-.3-.05-.65t.05-.65l-1.15-1l1-1.7l1.45.45q.275-.2.538-.337t.562-.263l.3-1.5h2l.3 1.5q.3.125.563.263t.537.337l1.45-.45l1 1.7l-1.15 1q.05.3.05.65t-.05.65l1.15 1l-1 1.7l-1.45-.45q-.275.2-.537.338t-.563.262l-.3 1.5zM5 20q-.825 0-1.412-.587T3 18V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v5.65q-.475-.225-.975-.363T19 9.076V4H5v9h4.2q.225.675.75 1.175t1.175.7q-.225 1.35.063 2.675T12.275 20zm13.025-2q.825 0 1.413-.587T20.025 16t-.587-1.412T18.025 14t-1.412.588T16.025 16t.588 1.413t1.412.587"></svg:path>`,
})
export class MaterialSymbolsInboxCustomizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInboxTextIcon],svg[material-symbols-inbox-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm7-5q.95 0 1.725-.55T14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45T12 16m-5-3.75h10v-2H7zm0-3.5h10v-2H7z"></svg:path>`,
})
export class MaterialSymbolsInboxTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInboxTextAsteriskIcon],svg[material-symbols-inbox-text-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.45 20.825l-1.6-1.175l1.525-2.125l-2.475-.8l.6-1.925l2.5.825V13h2v2.625l2.5-.825l.6 1.925l-2.475.8l1.525 2.125l-1.6 1.175L18 18.7zM5 21q-.825 0-1.413-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5.65q-.475-.225-.975-.363T19 10.076V5H5v9h4.2q.225.675.75 1.175t1.175.7q-.2 1.35.075 2.675T12.275 21zM7 8.75h10v-2H7zm0 3.5h5.925q.675-.725 1.512-1.225t1.813-.775H7z"></svg:path>`,
})
export class MaterialSymbolsInboxTextAsteriskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInboxTextPersonIcon],svg[material-symbols-inbox-text-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20v-.575q0-.6.325-1.1t.9-.75q.7-.275 1.363-.425t1.487-.15q.725 0 1.425.15t1.275.425q.575.25.9.75t.325 1.1V20zm4-4q-.825 0-1.412-.587T16 14t.588-1.412T18 12t1.413.588T20 14t-.587 1.413T18 16M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5.65q-.475-.225-.975-.363T19 10.076V5H5v9h4.2q.225.675.75 1.175t1.175.7q-.2 1.35.075 2.675T12.275 21zM7 8.75h10v-2H7zm0 3.5h5.925q.675-.725 1.513-1.225t1.812-.775H7z"></svg:path>`,
})
export class MaterialSymbolsInboxTextPersonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInboxTextShareIcon],svg[material-symbols-inbox-text-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5.65q-.475-.225-.975-.363T19 10.076V5H5v9h4.2q.225.675.75 1.175t1.175.7q-.2 1.35.075 2.675T12.275 21zM7 8.75h10v-2H7zm0 3.5h5.925q.675-.725 1.513-1.225t1.812-.775H7zM20 22q-.825 0-1.412-.587T18 19.975l-2.025-1.225q-.225.125-.462.188T15 19q-.825 0-1.412-.587T13 17t.588-1.412T15 15q.275 0 .513.063t.462.187L18 14.05q0-.85.588-1.437T20 12.025t1.413.588t.587 1.412t-.587 1.413t-1.413.587q-.275 0-.513-.062t-.462-.188L17 16.975v.075l2.025 1.2q.225-.125.463-.187T20 18q.825 0 1.413.588T22 20t-.587 1.413T20 22"></svg:path>`,
})
export class MaterialSymbolsInboxTextShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIncompleteCircleIcon],svg[material-symbols-incomplete-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-2.1.775-3.912T4.9 4.9L12 12V2q2.075 0 3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsIncompleteCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIndeterminateCheckBoxIcon],svg[material-symbols-indeterminate-check-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13h10v-2H7zm-2 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsIndeterminateCheckBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIndeterminateQuestionBoxIcon],svg[material-symbols-indeterminate-question-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-4h2v4h4v2zm14 0h-4v-2h4v-4h2v4q0 .825-.587 1.413T19 21M3 5q0-.825.588-1.412T5 3h4v2H5v4H3zm18 0v4h-2V5h-4V3h4q.825 0 1.413.588T21 5m-9 13q.525 0 .888-.363t.362-.887t-.363-.888T12 15.5t-.888.363t-.362.887t.363.888T12 18m-.9-3.825h1.825q0-.85.2-1.3T14 11.75q.875-.875 1.163-1.412t.287-1.288q0-1.35-.975-2.2T12 6q-1.25 0-2.15.65T8.55 8.5l1.65.675q.175-.65.663-1.062T12 7.7q.725 0 1.163.388t.437 1.037q0 .5-.237.938t-.813.912q-.825.725-1.137 1.4t-.313 1.8"></svg:path>`,
})
export class MaterialSymbolsIndeterminateQuestionBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInfoIcon],svg[material-symbols-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInfoIIcon],svg[material-symbols-info-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7q-.825 0-1.412-.587T10 5t.588-1.412T12 3t1.413.588T14 5t-.587 1.413T12 7m-1.5 14V9h3v12z"></svg:path>`,
})
export class MaterialSymbolsInfoIIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInfraredIcon],svg[material-symbols-infrared-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.9 21.9l-1.425-1.425q1.65-1.65 2.588-3.812T18 12t-.937-4.663t-2.588-3.812L15.9 2.1q1.9 1.9 3 4.438T20 12t-1.1 5.463t-3 4.437m-2.825-2.825L11.65 17.65q1.1-1.1 1.725-2.55T14 12t-.625-3.1t-1.725-2.55l1.425-1.425q1.35 1.35 2.138 3.175T16 12t-.788 3.9t-2.137 3.175M10.25 16.25l-1.425-1.425q.55-.55.863-1.275T10 12t-.312-1.55t-.863-1.275L10.25 7.75q.8.8 1.275 1.9T12 12t-.475 2.35t-1.275 1.9M4 20V4h2v6q.825 0 1.413.588T8 12t-.587 1.413T6 14v6z"></svg:path>`,
})
export class MaterialSymbolsInfraredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkEraserIcon],svg[material-symbols-ink-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 18H22v2h-6.75zm-12.5 2l-2.125-2.125q-.575-.575-.587-1.425T2.6 15l11-11.4q.575-.6 1.413-.6t1.412.575L21.4 8.55q.575.575.575 1.425T21.4 11.4L13 20z"></svg:path>`,
})
export class MaterialSymbolsInkEraserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkEraserOffIcon],svg[material-symbols-ink-eraser-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L15.05 17.9L13 20H4.75l-2.125-2.125q-.575-.575-.587-1.425T2.6 15l4.7-4.85l-5.925-5.925L2.8 2.8l18.4 18.4zm-1.9-7.6L10.1 7.25l3.5-3.65q.575-.6 1.413-.6t1.412.575L21.4 8.55q.575.575.575 1.425T21.4 11.4z"></svg:path>`,
})
export class MaterialSymbolsInkEraserOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkHighlighterIcon],svg[material-symbols-ink-highlighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.6 10l5.4 5.4l-5 5q-.6.6-1.4.6t-1.4-.6l-.05-.05l-.65.65h-5l3.15-3.15l-.05-.05q-.6-.6-.6-1.4t.6-1.4zm1.425-1.425L16 3.6q.6-.6 1.4-.6t1.4.6l2.6 2.6q.6.6.6 1.4T21.4 9l-4.975 4.975z"></svg:path>`,
})
export class MaterialSymbolsInkHighlighterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkHighlighterMoveIcon],svg[material-symbols-ink-highlighter-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.775 4H7V2h8.775zm-4 4H4V6h7.775zm-4 4H1v-2h6.775zm4.825-2l5.4 5.4l-5 5q-.6.6-1.4.6t-1.4-.6l-.05-.05l-.65.65h-5l3.15-3.15l-.05-.05q-.6-.6-.6-1.4t.6-1.4zm1.425-1.425L17 3.6q.6-.6 1.4-.6t1.4.6l2.6 2.6q.6.6.6 1.4T22.4 9l-4.975 4.975z"></svg:path>`,
})
export class MaterialSymbolsInkHighlighterMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkMarkerIcon],svg[material-symbols-ink-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.8 21.4l-.95-.95L4.8 21.5q-.475.475-1.162.488T2.5 21.5q-.475-.475-.475-1.15T2.5 19.2l1.05-1.05l-.95-1L16.45 3.3q.3-.3.725-.3t.725.3l2.8 2.8q.3.3.3.725t-.3.725zm4.3-9.9l-5.7 5.65l1.45 1.45l5.65-5.7z"></svg:path>`,
})
export class MaterialSymbolsInkMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkPenIcon],svg[material-symbols-ink-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.275 12.475L11.525 8.7L14.3 5.95l-.725-.725L8.1 10.7L6.7 9.3l5.45-5.475q.6-.6 1.413-.6t1.412.6l.725.725l1.25-1.25q.3-.3.713-.3t.712.3L20.7 5.625q.3.3.3.713t-.3.712zM6.75 21H3v-3.75l7.1-7.125l3.775 3.75z"></svg:path>`,
})
export class MaterialSymbolsInkPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkSelectionIcon],svg[material-symbols-ink-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21V11h10v2h-6.6l6.6 6.6l-1.4 1.4l-6.6-6.6V21zm-4 0v-2h2v2zM5 5H3q0-.825.588-1.412T5 3zm2 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3q.825 0 1.413.588T21 5zM5 19v2q-.825 0-1.412-.587T3 19zm-2-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm16 0V7h2v2z"></svg:path>`,
})
export class MaterialSymbolsInkSelectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInpatientIcon],svg[material-symbols-inpatient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h9q.825 0 1.413.588T15 4v16q0 .825-.587 1.413T13 22zm0-11.475q.45-.275.95-.4T6 10h5q.55 0 1.05.125t.95.4V4H4zM8.5 9q-.825 0-1.412-.588T6.5 7t.588-1.412T8.5 5t1.413.588T10.5 7t-.587 1.413T8.5 9m11 6.5L16 12l3.5-3.5l1.4 1.4l-1.075 1.1H23v2h-3.175l1.075 1.1zM7.5 19h2v-2h2v-2h-2v-2h-2v2h-2v2h2z"></svg:path>`,
})
export class MaterialSymbolsInpatientIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInputIcon],svg[material-symbols-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18v-3h2v3h16V6H4v3H2V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm7.5-3.5l-1.4-1.45L12.175 13H2v-2h10.175L10.1 8.95l1.4-1.45L16 12z"></svg:path>`,
})
export class MaterialSymbolsInputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInputCircleIcon],svg[material-symbols-input-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8l-5 5l1.4 1.4l2.6-2.575V22h2V11.825l2.6 2.575L17 13zm-8.35 9.5q-.8-1.225-1.225-2.625T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12q0 1.475-.425 2.875T20.35 17.5l-1.45-1.45q.55-.925.825-1.95T20 12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12q0 1.075.275 2.1t.825 1.95z"></svg:path>`,
})
export class MaterialSymbolsInputCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInsertChartIcon],svg[material-symbols-insert-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h2v-7H7zm4 0h2V7h-2zm4 0h2v-4h-2zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsInsertChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInsertPageBreakIcon],svg[material-symbols-insert-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20v-3h16v3q0 .825-.587 1.413T18 22zm7-13h5l-5-5zm-4 6v-2h6v2zm8 0v-2h6v2zM1 15v-2h6v2zm3-4V4q0-.825.588-1.412T6 2h8l6 6v3z"></svg:path>`,
})
export class MaterialSymbolsInsertPageBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInsertTextIcon],svg[material-symbols-insert-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16v-6H8V8h8v2h-3v6zM1 23v-6h2V7H1V1h6v2h10V1h6v6h-2v10h2v6h-6v-2H7v2zm6-4h10v-2h2V7h-2V5H7v2H5v10h2z"></svg:path>`,
})
export class MaterialSymbolsInsertTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInsightsIcon],svg[material-symbols-insights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20q-.825 0-1.413-.588T1 18q0-.825.588-1.413T3 16h.263q.112 0 .237.05l4.55-4.55Q8 11.375 8 11.262V11q0-.825.588-1.413T10 9q.825 0 1.413.588T12 11q0 .05-.05.5l2.55 2.55q.125-.05.238-.05h.525q.112 0 .237.05l3.55-3.55q-.05-.125-.05-.238V10q0-.825.588-1.413T21 8q.825 0 1.413.588T23 10q0 .825-.588 1.413T21 12h-.263q-.112 0-.237-.05l-3.55 3.55q.05.125.05.238V16q0 .825-.588 1.413T15 18q-.825 0-1.413-.588T13 16v-.263q0-.112.05-.237l-2.55-2.55q-.125.05-.238.05H10q-.05 0-.5-.05L4.95 17.5q.05.125.05.238V18q0 .825-.588 1.413T3 20ZM4 9.975l-.625-1.35L2.025 8l1.35-.625L4 6.025l.625 1.35L5.975 8l-1.35.625L4 9.975ZM15 9l-.95-2.05L12 6l2.05-.95L15 3l.95 2.05L18 6l-2.05.95L15 9Z"></svg:path>`,
})
export class MaterialSymbolsInsightsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInstallDesktopIcon],svg[material-symbols-install-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h8v2H4v12h16v-3h2v3q0 .825-.587 1.413T20 19h-4v2zm9-7l-5-5l1.4-1.4l2.6 2.575V3h2v7.175L20.6 7.6L22 9z"></svg:path>`,
})
export class MaterialSymbolsInstallDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInstallMobileIcon],svg[material-symbols-install-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h7v5H7v12h10v-2h2v5q0 .825-.587 1.413T17 23zm11-9l-5-5l1.4-1.4l2.6 2.6V3h2v7.2l2.6-2.6L23 9z"></svg:path>`,
})
export class MaterialSymbolsInstallMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInstantMixIcon],svg[material-symbols-instant-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-7H3v-2h6v2H7v7zM5 9V4h2v5zm4 0V7h2V4h2v3h2v2zm2 11v-9h2v9zm6 0v-3h-2v-2h6v2h-2v3zm0-7V4h2v9z"></svg:path>`,
})
export class MaterialSymbolsInstantMixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIntegrationInstructionsIcon],svg[material-symbols-integration-instructions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.6 15.6l1.4-1.45L8.85 12L11 9.85L9.6 8.4L6 12zm4.8 0L18 12l-3.6-3.6L13 9.85L15.15 12L13 14.15zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm7-16.75q.325 0 .538-.213t.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212"></svg:path>`,
})
export class MaterialSymbolsIntegrationInstructionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInteractiveSpaceIcon],svg[material-symbols-interactive-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14q-.825 0-1.412-.587T2 12V3q0-.825.588-1.412T4 1h16q.825 0 1.413.588T22 3v9q0 .825-.587 1.413T20 14h-3.225q.15-.5.2-1t0-1q-.2-1.9-1.612-3.2T12 7.5T8.637 8.8T7.025 12q-.05.5 0 1t.2 1zm3-5.5l2-2l-2-2l-2 2zM16.5 7q.625 0 1.063-.437T18 5.5t-.437-1.062T16.5 4t-1.062.438T15 5.5t.438 1.063T16.5 7M5 23v-2.1q0-.875.488-1.625t1.287-1.125q1.225-.575 2.55-.862T12 17t2.675.288t2.55.862q.8.375 1.288 1.125T19 20.9V23zm7-7q-1.45 0-2.475-1.025T8.5 12.5t1.025-2.475T12 9t2.475 1.025T15.5 12.5t-1.025 2.475T12 16"></svg:path>`,
})
export class MaterialSymbolsInteractiveSpaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInterestsIcon],svg[material-symbols-interests-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 11l5-9l5 9zm5 10q-1.65 0-2.825-1.175T3 17t1.175-2.825T7 13t2.825 1.175T11 17t-1.175 2.825T7 21m6 0v-8h8v8zm4-10q-1.425-1.2-2.387-2.025t-1.538-1.45t-.825-1.175T12 5.175q0-1.125.788-1.9T14.75 2.5q.675 0 1.263.313t.987.862q.4-.55.988-.862T19.25 2.5q1.175 0 1.963.775t.787 1.9q0 .625-.25 1.175t-.825 1.175t-1.537 1.45T17 11"></svg:path>`,
})
export class MaterialSymbolsInterestsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInterpreterModeIcon],svg[material-symbols-interpreter-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 16.5q-.625 0-1.062-.437T19 15v-2.5q0-.625.438-1.062T20.5 11t1.063.438T22 12.5V15q0 .625-.437 1.063T20.5 16.5M20 20v-1.55q-1.275-.2-2.137-1.162T17 15h1q0 1.05.725 1.775t1.775.725t1.775-.725T23 15h1q0 1.325-.862 2.287T21 18.45V20zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4q.35 0 .688.05t.662.175q-.65.775-1 1.737T9 8t.35 2.038t1 1.737q-.325.125-.663.175T9 12m-8 8v-2.775q0-.85.425-1.575t1.175-1.1q.95-.5 2.063-.862t2.437-.563q-1 .7-1.55 1.775T5 17.225V20zm14-8q-1.65 0-2.825-1.175T11 8t1.175-2.825T15 4t2.825 1.175T19 8t-1.175 2.825T15 12m-8 8v-2.775q0-.85.425-1.575t1.175-1.1q1.275-.65 2.888-1.1T15 13q.3 0 .588.013t.562.037q-1.05 1.9-.4 3.95t2.575 3z"></svg:path>`,
})
export class MaterialSymbolsInterpreterModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInventoryIcon],svg[material-symbols-inventory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.5 19.925l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4zM21 10h-2V5h-2v3H7V5H5v14h6v2H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.175q.275-.875 1.075-1.437T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5zm-9-5q.425 0 .713-.288T13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5"></svg:path>`,
})
export class MaterialSymbolsInventoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInventory2Icon],svg[material-symbols-inventory-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V8.725q-.45-.275-.725-.712T2 7V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v3q0 .575-.275 1.013T21 8.724V20q0 .825-.587 1.413T19 22zM4 7h16V4H4zm5 7h6v-2H9z"></svg:path>`,
})
export class MaterialSymbolsInventory2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInvertColorsIcon],svg[material-symbols-invert-colors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-3.325 0-5.663-2.3T4 13.125q0-1.65.625-3.062T6.35 7.55L12 2l5.65 5.55q1.1 1.1 1.725 2.513T20 13.125q0 3.275-2.337 5.575T12 21m0-2V4.8L7.75 9q-.875.825-1.312 1.875T6 13.125q0 2.425 1.75 4.15T12 19"></svg:path>`,
})
export class MaterialSymbolsInvertColorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInvertColorsOffIcon],svg[material-symbols-invert-colors-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.275 16.45L12 9.175V4.8L9.775 6.975l-1.4-1.4L12 2l5.65 5.575q1.2 1.2 1.775 2.588T20 13.1q0 .95-.2 1.813t-.525 1.537m.525 6.15l-3.1-3.1q-1.05.775-2.287 1.138T12 21q-3.325 0-5.663-2.287T4 13.1q0-1.275.4-2.45T5.6 8.4L1.4 4.2l1.4-1.4l18.4 18.4zM12 19v-4.175l-5-5q-.525.8-.763 1.613T6 13.1q0 2.5 1.75 4.2T12 19"></svg:path>`,
})
export class MaterialSymbolsInvertColorsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIosIcon],svg[material-symbols-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9V7h2v2zm0 8v-6h2v6zm7 0H9q-.825 0-1.412-.587T7 15V9q0-.825.588-1.412T9 7h2q.825 0 1.413.588T13 9v6q0 .825-.587 1.413T11 17m-2-2h2V9H9zm5 2v-2h4v-2h-2q-.825 0-1.412-.587T14 11V9q0-.825.588-1.412T16 7h4v2h-4v2h2q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17z"></svg:path>`,
})
export class MaterialSymbolsIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIosShareIcon],svg[material-symbols-ios-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 23q-.825 0-1.412-.587T4 21V10q0-.825.588-1.412T6 8h3v2H6v11h12V10h-3V8h3q.825 0 1.413.588T20 10v11q0 .825-.587 1.413T18 23zm5-7V4.825l-1.6 1.6L8 5l4-4l4 4l-1.4 1.425l-1.6-1.6V16z"></svg:path>`,
})
export class MaterialSymbolsIosShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIronIcon],svg[material-symbols-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18v-3q0-1.65 1.175-2.825T6 11h9v-1q0-.425-.288-.712T14 9h-4q-.425 0-.712.288T9 10H7q0-1.25.875-2.125T10 7h4q1.25 0 2.125.875T17 10v4q.425 0 .713-.288T18 13V9q0-1.25.875-2.125T21 6h1v2h-1q-.425 0-.712.288T20 9v4q0 1.25-.875 2.125T17 16v2z"></svg:path>`,
})
export class MaterialSymbolsIronIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJamboardKioskIcon],svg[material-symbols-jamboard-kiosk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21v-2h5v-3H4q-.825 0-1.412-.587T2 14V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v9q0 .825-.587 1.413T20 16h-7v3h5v2z"></svg:path>`,
})
export class MaterialSymbolsJamboardKioskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJavascriptIcon],svg[material-symbols-javascript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 15q-.625 0-1.062-.437T6 13.5v-1h1.5v1H9V9h1.5v4.5q0 .625-.437 1.063T9 15zm5.5 0q-.425 0-.712-.288T12 14v-1h1.5v.5h2v-1H13q-.425 0-.712-.288T12 11.5V10q0-.425.288-.712T13 9h3q.425 0 .713.288T17 10v1h-1.5v-.5h-2v1H16q.425 0 .713.288T17 12.5V14q0 .425-.288.713T16 15z"></svg:path>`,
})
export class MaterialSymbolsJavascriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJoinIcon],svg[material-symbols-join-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19q-.7 0-1.362-.137t-1.288-.388q1.475-1.35 2.313-3.012T16.5 12t-.837-3.463t-2.313-3.012q.625-.25 1.288-.387T16 5q2.925 0 4.963 2.038T23 12t-2.037 4.963T16 19m-4-1.25q-1.375-.95-2.187-2.45T9 12t.813-3.3T12 6.25q1.375.95 2.188 2.45T15 12t-.812 3.3T12 17.75M8 19q-2.925 0-4.962-2.037T1 12t2.038-4.962T8 5q.7 0 1.363.138t1.287.387q-1.475 1.35-2.312 3.013T7.5 12q0 1.975.813 3.663t2.237 2.862q-.6.225-1.237.35T8 19"></svg:path>`,
})
export class MaterialSymbolsJoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJoinInnerIcon],svg[material-symbols-join-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19q-2.925 0-4.962-2.037T1 12t2.038-4.962T8 5q.675 0 1.313.125t1.237.35q-.425.35-.8.763t-.7.862q-.25-.05-.513-.075T8 7Q5.925 7 4.463 8.463T3 12t1.463 3.538T8 17q.275 0 .538-.025t.512-.075q.325.45.7.863t.8.762q-.6.225-1.238.35T8 19m8 0q-.675 0-1.313-.125t-1.237-.35q.425-.35.8-.762t.7-.863q.275.05.525.075T16 17q2.075 0 3.538-1.463T21 12t-1.463-3.537T16 7q-.275 0-.525.025t-.525.075q-.325-.45-.7-.862t-.8-.763q.6-.225 1.238-.35T16 5q2.925 0 4.963 2.038T23 12t-2.037 4.963T16 19m-4-1.25q-1.425-.975-2.212-2.5T9 12t.788-3.25T12 6.25q1.425.975 2.213 2.5T15 12t-.788 3.25T12 17.75"></svg:path>`,
})
export class MaterialSymbolsJoinInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJoinLeftIcon],svg[material-symbols-join-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19q-2.925 0-4.962-2.037T1 12t2.038-4.962T8 5q.675 0 1.313.125t1.237.35Q9.1 6.7 8.3 8.4T7.5 12t.8 3.6t2.25 2.925q-.6.225-1.237.35T8 19m8 0q-.675 0-1.312-.125t-1.238-.35q.425-.35.8-.762t.7-.863q.275.05.525.075T16 17q2.075 0 3.538-1.463T21 12t-1.463-3.537T16 7q-.275 0-.525.025t-.525.075q-.325-.45-.7-.862t-.8-.763q.6-.225 1.238-.35T16 5q2.925 0 4.963 2.038T23 12t-2.037 4.963T16 19m-4-1.25q-1.425-.975-2.212-2.5T9 12t.788-3.25T12 6.25q1.425.975 2.213 2.5T15 12t-.788 3.25T12 17.75"></svg:path>`,
})
export class MaterialSymbolsJoinLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJoinRightIcon],svg[material-symbols-join-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19q-.675 0-1.312-.125t-1.238-.35Q14.9 17.3 15.7 15.6t.8-3.6t-.8-3.6t-2.25-2.925q.6-.225 1.238-.35T16 5q2.925 0 4.963 2.038T23 12t-2.037 4.963T16 19m-8 0q-2.925 0-4.962-2.037T1 12t2.038-4.962T8 5q.675 0 1.313.125t1.237.35q-.425.35-.8.763t-.7.862q-.25-.05-.513-.075T8 7Q5.925 7 4.463 8.463T3 12t1.463 3.538T8 17q.275 0 .538-.025t.512-.075q.325.45.7.863t.8.762q-.6.225-1.238.35T8 19m4-1.25q-1.425-.975-2.213-2.5T9 12t.788-3.25T12 6.25q1.425.975 2.213 2.5T15 12t-.788 3.25T12 17.75"></svg:path>`,
})
export class MaterialSymbolsJoinRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJoystickIcon],svg[material-symbols-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zM6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"></svg:path>`,
})
export class MaterialSymbolsJoystickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJumpToElementIcon],svg[material-symbols-jump-to-element-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13V9h2v2h2v2zm7 0v-2h2V9h2v4zm-7-7V2h4v2h-2v2zm9 0V4h-2V2h4v4zM3.4 22L2 20.6L7.6 15H3v-2h8v8H9v-4.6z"></svg:path>`,
})
export class MaterialSymbolsJumpToElementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKayakingIcon],svg[material-symbols-kayaking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 23v-2h1q.8 0 1.55-.25T6 20q.7.5 1.45.75T9 21t1.563-.25T12 20q.7.5 1.45.75T15 21t1.563-.25T18 20q.675.5 1.438.75T21 21h1v2h-1q-.775 0-1.525-.187T18 22.25q-.725.375-1.475.563T15 23t-1.525-.187T12 22.25q-.725.375-1.475.563T9 23t-1.525-.187T6 22.25q-.725.375-1.475.563T3 23zm7-4q-.9 0-1.675-.425T6 17.5q-.425.45-.937.813t-1.138.562Q2.9 18.6 1.85 18.225T0 17.5q1.35-.575 3.3-1.175t3.825-.9l1.35-4.175q.275-.85 1.038-1.125t1.437.075l2.55 1.3l2.825-1.5l1.65-3.7l-.5-1.325L18.8 2L22 3.425L20.675 6.4l-1.325.5l-3.7 8.35q2.325.275 4.662.95T24 17.5q-.725.325-1.838.713t-2.087.662q-.625-.175-1.137-.537T18 17.5q-.55.65-1.325 1.075T15 19t-1.675-.425T12 17.5q-.55.65-1.325 1.075T9 19m5.075-3.925l.95-2.125l-1.525.8l-1.75-.9l-.7 2.15H12q.525 0 1.05.013t1.025.062M12 9.5q-.825 0-1.412-.587T10 7.5t.588-1.412T12 5.5t1.413.588T14 7.5t-.587 1.413T12 9.5"></svg:path>`,
})
export class MaterialSymbolsKayakingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKebabDiningIcon],svg[material-symbols-kebab-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 23v-4H5.5q-1.05 0-1.775-.725T3 16.5t.725-1.775T5.5 14h.75v-1H3V8h3.25V7H5.5q-1.05 0-1.775-.725T3 4.5t.725-1.775T5.5 2h.75V1h1.5v1h.75q1.05 0 1.775.725T11 4.5t-.725 1.775T8.5 7h-.75v1H11v5H7.75v1h.75q1.05 0 1.775.725T11 16.5t-.725 1.775T8.5 19h-.75v4zm10 0v-4h-.75q-1.05 0-1.775-.725T13 16.5t.725-1.775T15.5 14h.75v-1H13V8h3.25V7h-.75q-1.05 0-1.775-.725T13 4.5t.725-1.775T15.5 2h.75V1h1.5v1h.75q1.05 0 1.775.725T21 4.5t-.725 1.775T18.5 7h-.75v1H21v5h-3.25v1h.75q1.05 0 1.775.725T21 16.5t-.725 1.775T18.5 19h-.75v4z"></svg:path>`,
})
export class MaterialSymbolsKebabDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeepIcon],svg[material-symbols-keep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 12l2 2v2h-5v6l-1 1l-1-1v-6H6v-2l2-2V5H7V3h10v2h-1z"></svg:path>`,
})
export class MaterialSymbolsKeepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeepOffIcon],svg[material-symbols-keep-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3v2h-1v8.175L7.825 5L7 4.175V3zm-5 20l-1-1v-6H6v-2l2-2v-1.15L1.4 4.2l1.4-1.4l18.4 18.4l-1.45 1.4l-6.6-6.6H13v6z"></svg:path>`,
})
export class MaterialSymbolsKeepOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeepPublicIcon],svg[material-symbols-keep-public-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 23l-1-1v-6H3v-2l2-2V5H4V3h7.125Q10.1 4 9.55 5.288T9 8q0 2.625 1.713 4.588T15 14.925V16h-5v6zm7-10q-2.075 0-3.537-1.463T11 8t1.463-3.537T16 3t3.538 1.463T21 8t-1.463 3.538T16 13m0-5q.625 0 1.063-.437T17.5 6.5t-.437-1.062T16 5t-1.062.438T14.5 6.5t.438 1.063T16 8m0 3q.775 0 1.413-.363t1.062-.962q-.55-.325-1.175-.5T16 9t-1.3.175t-1.175.5q.425.6 1.062.963T16 11"></svg:path>`,
})
export class MaterialSymbolsKeepPublicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKettleIcon],svg[material-symbols-kettle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19V6L3 2h15v3h2q.825 0 1.413.588T22 7v5q0 .825-.587 1.413T20 14h-2v5zm12-7h2V7h-2zm-6 4h3V5h-3zm-9 6v-2h18v2z"></svg:path>`,
})
export class MaterialSymbolsKettleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyIcon],svg[material-symbols-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15q1.25 0 2.125-.875T10 12t-.875-2.125T7 9t-2.125.875T4 12t.875 2.125T7 15m0 3q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q2.025 0 3.538 1.15T12.65 10h8.375L23 11.975l-3.5 4L17 14l-2 2l-2-2h-.35q-.625 1.8-2.175 2.9T7 18"></svg:path>`,
})
export class MaterialSymbolsKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyOffIcon],svg[material-symbols-key-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.75 22.575l-7.55-7.55q-.8 1.35-2.175 2.163T7 18q-2.5 0-4.25-1.75T1 12q0-1.65.813-3.025T3.975 6.8l-2.55-2.55l1.425-1.4l18.3 18.325zM21.025 10L23 11.975l-4 4L17 14l-.075.1l-2.1-2.1l-2-2zM7 15q1.075 0 1.875-.663T9.9 12.726l-.562-.562l-1.25-1.25l-1.25-1.25l-.563-.563q-1.05.225-1.662 1.063T4 12q0 1.25.875 2.125T7 15"></svg:path>`,
})
export class MaterialSymbolsKeyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyVerticalIcon],svg[material-symbols-key-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10q1.25 0 2.125-.875T15 7t-.875-2.125T12 4t-2.125.875T9 7t.875 2.125T12 10m.05 13L8 19l2-2l-2-2l2-2v-.35q-1.8-.625-2.9-2.175T6 7q0-2.5 1.75-4.25T12 1t4.25 1.75T18 7q0 2.025-1.15 3.538T14 12.65V21z"></svg:path>`,
})
export class MaterialSymbolsKeyVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyVisualizerIcon],svg[material-symbols-key-visualizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2h3v2zm0-4v-2h8v2zm0-4v-2h18v2zm0-4V7h8v2zm0-4V3h3v2zm5 16v-2h3v2zM8 5V3h3v2zm5 16v-2h3v2zm0-4v-2h8v2zm0-8V7h8v2zm0-4V3h3v2zm5 16v-2h3v2zm0-16V3h3v2z"></svg:path>`,
})
export class MaterialSymbolsKeyVisualizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardIcon],svg[material-symbols-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19q-.825 0-1.412-.587T2 17V7q0-.825.588-1.412T4 5h16q.825 0 1.413.588T22 7v10q0 .825-.587 1.413T20 19zm4-3h8v-2H8zm-3-3h2v-2H5zm3 0h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm3 0h2v-2h-2zM5 10h2V8H5zm3 0h2V8H8zm3 0h2V8h-2zm3 0h2V8h-2zm3 0h2V8h-2z"></svg:path>`,
})
export class MaterialSymbolsKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardAltIcon],svg[material-symbols-keyboard-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zm5-3h8v-2H8zm-3-3.5h2v-2H5zm4 0h2v-2H9zm4 0h2v-2h-2zm4 0h2v-2h-2zM5 10h2V8H5zm4 0h2V8H9zm4 0h2V8h-2zm4 0h2V8h-2z"></svg:path>`,
})
export class MaterialSymbolsKeyboardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardArrowDownIcon],svg[material-symbols-keyboard-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"></svg:path>`,
})
export class MaterialSymbolsKeyboardArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardArrowUpIcon],svg[material-symbols-keyboard-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsKeyboardArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardBackspaceIcon],svg[material-symbols-keyboard-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 18l-6-6l6-6l1.4 1.4L6.8 11H21v2H6.8l3.6 3.6z"></svg:path>`,
})
export class MaterialSymbolsKeyboardBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardCapslockIcon],svg[material-symbols-keyboard-capslock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18v-2h12v2zm6-12.4l6 6l-1.4 1.4L12 8.4L7.4 13L6 11.6z"></svg:path>`,
})
export class MaterialSymbolsKeyboardCapslockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardCapslockBadgeIcon],svg[material-symbols-keyboard-capslock-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h10v-2H7zm1.4-4L12 9.4l3.6 3.6l1.4-1.4l-5-5l-5 5zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsKeyboardCapslockBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardCommandKeyIcon],svg[material-symbols-keyboard-command-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 21q-1.45 0-2.475-1.025T3 17.5t1.025-2.475T6.5 14H8v-4H6.5q-1.45 0-2.475-1.025T3 6.5t1.025-2.475T6.5 3t2.475 1.025T10 6.5V8h4V6.5q0-1.45 1.025-2.475T17.5 3t2.475 1.025T21 6.5t-1.025 2.475T17.5 10H16v4h1.5q1.45 0 2.475 1.025T21 17.5t-1.025 2.475T17.5 21t-2.475-1.025T14 17.5V16h-4v1.5q0 1.45-1.025 2.475T6.5 21m0-2q.625 0 1.063-.437T8 17.5V16H6.5q-.625 0-1.062.438T5 17.5t.438 1.063T6.5 19m11 0q.625 0 1.063-.437T19 17.5t-.437-1.062T17.5 16H16v1.5q0 .625.438 1.063T17.5 19M10 14h4v-4h-4zM6.5 8H8V6.5q0-.625-.437-1.062T6.5 5t-1.062.438T5 6.5t.438 1.063T6.5 8M16 8h1.5q.625 0 1.063-.437T19 6.5t-.437-1.062T17.5 5t-1.062.438T16 6.5z"></svg:path>`,
})
export class MaterialSymbolsKeyboardCommandKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardControlKeyIcon],svg[material-symbols-keyboard-control-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.4 13.4L5 12l7-7l7 7l-1.4 1.4L12 7.825z"></svg:path>`,
})
export class MaterialSymbolsKeyboardControlKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardDoubleArrowLeftIcon],svg[material-symbols-keyboard-double-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 18l-6-6l6-6l1.4 1.4L7.825 12l4.575 4.6zm6.6 0l-6-6l6-6L19 7.4L14.425 12L19 16.6z"></svg:path>`,
})
export class MaterialSymbolsKeyboardDoubleArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardDoubleArrowRightIcon],svg[material-symbols-keyboard-double-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.575 12L5 7.4L6.4 6l6 6l-6 6L5 16.6zm6.6 0L11.6 7.4L13 6l6 6l-6 6l-1.4-1.4z"></svg:path>`,
})
export class MaterialSymbolsKeyboardDoubleArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardExternalInputIcon],svg[material-symbols-keyboard-external-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zM5 8v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm1 14l-1.4-1.4l1.575-1.6H14v-2h4.175L16.6 15.4L18 14l4 4zm-5.9-3H4q-.825 0-1.412-.587T2 17V7q0-.825.588-1.412T4 5h16q.825 0 1.413.588T22 7v6.525q-.65-.575-1.412-.937T19 12.1V11h-2v1.1q-.275.05-.513.1t-.487.15V11h-2v2h.7q-.325.2-.6.463t-.55.537H8v2h4.35q-.175.475-.25.975T12.025 18q0 .275.013.513T12.1 19"></svg:path>`,
})
export class MaterialSymbolsKeyboardExternalInputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardFullIcon],svg[material-symbols-keyboard-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-6h16V6H4z"></svg:path>`,
})
export class MaterialSymbolsKeyboardFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardHideIcon],svg[material-symbols-keyboard-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23l-4-4h8zm-8-6q-.825 0-1.412-.587T2 15V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v10q0 .825-.587 1.413T20 17zm4-3h8v-2H8zm-3-3h2V9H5zm3 0h2V9H8zm3 0h2V9h-2zm3 0h2V9h-2zm3 0h2V9h-2zM5 8h2V6H5zm3 0h2V6H8zm3 0h2V6h-2zm3 0h2V6h-2zm3 0h2V6h-2z"></svg:path>`,
})
export class MaterialSymbolsKeyboardHideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardKeysIcon],svg[material-symbols-keyboard-keys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v-2h10v2zm-4-4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zM3 9V7h2v2zm4 0V7h2v2zm4 0V7h2v2zm4 0V7h2v2zm4 0V7h2v2z"></svg:path>`,
})
export class MaterialSymbolsKeyboardKeysIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardLockIcon],svg[material-symbols-keyboard-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.85 22q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25H17v-1q0-.825.588-1.412T19 14t1.413.588T21 16v1h.15q.35 0 .6.25t.25.6v3.3q0 .35-.25.6t-.6.25zM18 17h2v-1q0-.425-.288-.712T19 15t-.712.288T18 16zM5 13h2v-2H5zm3 0h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm-9-3h2V8H5zm3 0h2V8H8zm3 0h2V8h-2zm3 0h2V8h-2zm3 0h2V8h-2zm-3 7v2H4q-.825 0-1.412-.587T2 17V7q0-.825.588-1.412T4 5h16q.825 0 1.413.588T22 7v6q-.65-.5-1.425-.75T19 12v-1h-2v1.425q-.6.275-1.1.675t-.9.9H8v2h6.1q-.05.25-.075.488T14 17"></svg:path>`,
})
export class MaterialSymbolsKeyboardLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardLockOffIcon],svg[material-symbols-keyboard-lock-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19q-.825 0-1.412-.587T2 17V7q0-.825.588-1.412T4 5h1l9 9H8v2h6.1q-.05.25-.075.488T14 17v2zm16.475 4.3L.7 3.5l1.4-1.4l19.8 19.8zM5 11v2h2v-2zm3 0v2h2v-2zM5 8v2h2V8zm9 2h2V8h-2zm3 0h2V8h-2zM7.85 5H20q.825 0 1.413.588T22 7v6q-.65-.5-1.425-.75T19 12v-1h-2v1.425q-.275.125-.525.263T16 13v-2h-2v.15L12.85 10H13V8h-2v.15zM22 19.15l-2-2V16q0-.425-.288-.713T19 15q-.225 0-.437.1t-.338.275l-.7-.725q.275-.3.663-.475T19 14q.825 0 1.413.588T21 16v1h.15q.35 0 .6.25t.25.6zM16.85 22q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25H17l4 4v1z"></svg:path>`,
})
export class MaterialSymbolsKeyboardLockOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardOffIcon],svg[material-symbols-keyboard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.85 22.525L1.475 4.15L2.9 2.725L21.275 21.1zM8 16h8.175l-2-2H8zm-3-3h2v-2H5zm3 0h2v-2H8zm9 0h2v-2h-2zM5 10h2V8H5zm9 0h2V8h-2zm3 0h2V8h-2zM4 19q-.825 0-1.412-.587T2 17V7q0-.825.588-1.412T4 5h1.175l14 14zm17.4-.575l-5.4-5.45V11h-2l-1-1.025V8h-1.975l-3-3H20q.825 0 1.413.588T22 7v10.025q0 .425-.162.775t-.438.625"></svg:path>`,
})
export class MaterialSymbolsKeyboardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardOnscreenIcon],svg[material-symbols-keyboard-onscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17h8v-2H8zm-3-3h2v-2H5zm3 0h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm3 0h2v-2h-2zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM4 9h16V6H4z"></svg:path>`,
})
export class MaterialSymbolsKeyboardOnscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardOptionKeyIcon],svg[material-symbols-keyboard-option-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.775 19L7.85 7H3V5h6l6.925 12H21v2zM15 7V5h6v2z"></svg:path>`,
})
export class MaterialSymbolsKeyboardOptionKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardPreviousLanguageIcon],svg[material-symbols-keyboard-previous-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20V10q0-.825.588-1.412T4 8h16q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22zm4-3h8v-2H8zm-3-3h2v-2H5zm3 0h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm3 0h2v-2h-2zM5 13h2v-2H5zm3 0h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm3 0h2v-2h-2zM6 6V1h2v1.525Q8.8 1.8 9.825 1.4T12 1q2.2 0 3.875 1.413T17.9 6h-2.05q-.35-1.325-1.412-2.162T12 3q-.75 0-1.425.263T9.375 4H11v2z"></svg:path>`,
})
export class MaterialSymbolsKeyboardPreviousLanguageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardReturnIcon],svg[material-symbols-keyboard-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 18l-6-6l6-6l1.4 1.4L6.8 11H19V7h2v6H6.8l3.6 3.6z"></svg:path>`,
})
export class MaterialSymbolsKeyboardReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardTabIcon],svg[material-symbols-keyboard-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18V6h2v12zm-8 0l-1.425-1.4l3.6-3.6H2v-2h12.175L10.6 7.4L12 6l6 6z"></svg:path>`,
})
export class MaterialSymbolsKeyboardTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardTabRtlIcon],svg[material-symbols-keyboard-tab-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18H2V6h2zm8 0l-6-6l6-6l1.4 1.4L9.825 11H22v2H9.825l3.6 3.6z"></svg:path>`,
})
export class MaterialSymbolsKeyboardTabRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKidStarIcon],svg[material-symbols-kid-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763z"></svg:path>`,
})
export class MaterialSymbolsKidStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKingBedIcon],svg[material-symbols-king-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19H4l-.65-2H2v-5.025q0-.825.588-1.4T4 10V7q0-.825.588-1.412T6 5h12q.825 0 1.413.588T20 7v3q.825 0 1.413.588T22 12v5h-1.35L20 19h-1l-.65-2H5.65zm8-9h5V7h-5zm-7 0h5V7H6z"></svg:path>`,
})
export class MaterialSymbolsKingBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKitchenIcon],svg[material-symbols-kitchen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8h2V5H8zm0 9h2v-5H8zm-2 5q-.825 0-1.412-.587T4 20v-9h16v9q0 .825-.587 1.413T18 22zM4 9V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v5z"></svg:path>`,
})
export class MaterialSymbolsKitchenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKitesurfingIcon],svg[material-symbols-kitesurfing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 23v-2h1q.8 0 1.563-.25T6 20q.65.45 1.375.7t1.5.275Q9.7 21 10.5 20.75T12 20q.65.475 1.425.725t1.575.25t1.55-.238T18 20q.7.5 1.463.75T21 21h1v2h-1q-.775 0-1.525-.188T18 22.25q-.725.375-1.463.563T15 23q-.775 0-1.525-.187T12 22.25q-.725.4-1.525.588t-1.6.162q-.75-.025-1.475-.213T6 22.25q-.725.375-1.463.563T3 23zm7-4q-.65 0-1.287-.25T6.5 18q.35-.275.725-.575T8 16.85l-1.55-2.975q-.225-.425-.337-.9T6 12V8q0-.825.588-1.412T8 6h3q1 0 1.913-.375T14.55 4.55l1.4 1.4q-1.025 1-2.3 1.525T11 8H9.6v3.5h2.8l1.7 1.875q1.625-.675 2.888-1.025T19.15 12q.875 0 1.363.338t.487.937q0 .975-1.35 2.463t-3.7 3.112q-.225.075-.462.113T15 19q-.8 0-1.6-.387T12 17.5q-.6.725-1.388 1.113T9 19m.825-3.4q.4-.25 1.15-.675t1.225-.65l-.7-.775l-2.5.1zM8 5q-.825 0-1.413-.588T6 3t.588-1.412T8 1t1.413.588T10 3t-.587 1.413T8 5m8.55-.5L15.5 3.45L17.95 1h2.1z"></svg:path>`,
})
export class MaterialSymbolsKitesurfingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKormoIcon],svg[material-symbols-kormo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.675 20.375q-.3-.275-.563-.563q-.262-.287-.512-.587q1.075.175 2.212.112Q6.95 19.275 8 19q-.75.475-1.588.812q-.837.338-1.737.563ZM6.75 21.85q-.3-.175-.588-.362q-.287-.188-.562-.388q.675-.45 1.275-.975Q7.475 19.6 8 19q-.2.75-.512 1.475q-.313.725-.738 1.375ZM8 19V5.15q0-.35.225-.638q.225-.287.575-.362l7.95-1.625q.05 0 .1-.013q.05-.012.1-.012q.325 0 .575.2q.25.2.375.5l2.575 7.7q.125.35-.012.662q-.138.313-.438.513Zm1.5-4.1l3.675-6.375L9.5 6.4Zm4.425-7.65l1.7-2.95L10.6 5.325Zm-3.125 8.4l7.35-4.225L14.475 9.3Zm7.75-5.75l-1.625-4.85l-1.7 2.95Z"></svg:path>`,
})
export class MaterialSymbolsKormoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabPanelIcon],svg[material-symbols-lab-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19v-5q0-.825.588-1.412T3 12V7.725q-.45-.275-.725-.712T2 6V5q0-.825.588-1.412T4 3h5q.825 0 1.413.588T11 5v1q0 .575-.275 1.013T10 7.725V12h4V7.725q-.45-.275-.725-.712T13 6V5q0-.825.588-1.412T15 3h5q.825 0 1.413.588T22 5v1q0 .575-.275 1.013T21 7.725V12q.825 0 1.413.588T23 14v5q0 .825-.587 1.413T21 21zm13-9h3V8h-3zM5 12h3V8H5z"></svg:path>`,
})
export class MaterialSymbolsLabPanelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabProfileIcon],svg[material-symbols-lab-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12h8v-2H8zm0-4h8V6H8zm11.95 12.475L15.9 15.2q-.425-.575-1.05-.887T13.5 14H4V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .125-.012.238t-.038.237M6 22q-.825 0-1.412-.587T4 20v-4h9.5q.25 0 .463.113t.362.312l4.2 5.5q-.125.05-.262.063T18 22z"></svg:path>`,
})
export class MaterialSymbolsLabProfileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabResearchIcon],svg[material-symbols-lab-research-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17v-2h2.175q-.125.5-.162 1t.012 1zm0 5q-2.075 0-3.537-1.463T3 17V8q-.825 0-1.412-.587T1 6V4q0-.825.588-1.412T3 2h10q.825 0 1.413.588T15 4v2q0 .825-.587 1.413T13 8v3.025q-.6.375-1.1.875t-.875 1.1H8v-2h3V8H5v9q0 1.25.875 2.125T8 20q.75 0 1.363-.325t1.037-.9q.2.5.45.95t.6.875q-.675.65-1.55 1.025T8 22m8.5-3q1.05 0 1.775-.725T19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19m5.1 4l-2.7-2.7q-.55.35-1.15.525T16.5 21q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .65-.175 1.25T20.3 18.9l2.7 2.7z"></svg:path>`,
})
export class MaterialSymbolsLabResearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabelIcon],svg[material-symbols-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h11q.475 0 .9.213t.7.587L22 12l-5.4 7.2q-.275.375-.7.588T15 20z"></svg:path>`,
})
export class MaterialSymbolsLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabelImportantIcon],svg[material-symbols-label-important-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 20l6-8l-6-8h13q.475 0 .9.213t.7.587L22 12l-5.4 7.2q-.275.375-.7.588T15 20z"></svg:path>`,
})
export class MaterialSymbolsLabelImportantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabelOffIcon],svg[material-symbols-label-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.925 16.075L6.85 4H15q.475 0 .9.213t.7.587L22 12zM20.5 23.3l-3.975-3.975q-.25.325-.6.5T15.15 20H4q-.825 0-1.412-.587T2 18V6q0-.275.063-.513t.187-.437L.7 3.5l1.4-1.4l19.8 19.8z"></svg:path>`,
})
export class MaterialSymbolsLabelOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabsIcon],svg[material-symbols-labs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.537-1.463T7 17V8q-.825 0-1.412-.587T5 6V4q0-.825.588-1.412T7 2h10q.825 0 1.413.588T19 4v2q0 .825-.587 1.413T17 8v9q0 2.075-1.463 3.538T12 22m0-2q1.25 0 2.125-.875T15 17h-3v-2h3v-2h-3v-2h3V8H9v9q0 1.25.875 2.125T12 20"></svg:path>`,
})
export class MaterialSymbolsLabsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanIcon],svg[material-symbols-lan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22v-7h3v-4h5V9H8V2h8v7h-3v2h5v4h3v7h-8v-7h3v-2H8v2h3v7z"></svg:path>`,
})
export class MaterialSymbolsLanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLandscapeIcon],svg[material-symbols-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 18l6-8l4.5 6h2.525l-3.775-5L14 6l9 12z"></svg:path>`,
})
export class MaterialSymbolsLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLandscape2Icon],svg[material-symbols-landscape-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.15 20l3.45-6.9q.25-.5.713-.8T6.35 12q.6 0 1.1.312t.725.888l.675 1.65q.05.15.225.137t.225-.162l2.15-7.175q.35-1.2 1.338-1.925T15.025 5q1.225 0 2.188.712t1.337 1.863L22.875 20zM6 10q-1.25 0-2.125-.888T3 7q0-1.25.875-2.125T6 4t2.125.875T9 7q0 1.225-.875 2.113T6 10"></svg:path>`,
})
export class MaterialSymbolsLandscape2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLandscape2EditIcon],svg[material-symbols-landscape-2-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21v-3.075l5.525-5.5q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.5 5.5zm6.575-5.6l.925-.975l-.925-.925l-.95.95zM6 10q-1.25 0-2.125-.888T3 7q0-1.25.875-2.125T6 4t2.125.875T9 7q0 1.225-.875 2.113T6 10M1.15 20l3.45-6.9q.25-.5.713-.8T6.35 12q.6 0 1.1.312t.725.888q.05.15.338.825t.337.825t.225.137t.225-.162l2.15-7.175q.35-1.2 1.338-1.925T15.025 5q1.225 0 2.188.712t1.337 1.863l.9 2.6q-.375.125-.712.325t-.638.5L12 17.1V20z"></svg:path>`,
})
export class MaterialSymbolsLandscape2EditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLandscape2OffIcon],svg[material-symbols-landscape-2-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 23.35L.675 3.525L2.1 2.1l19.825 19.825zM6 10q-1.25 0-2.125-.888T3 7q0-.8.4-1.475T4.45 4.45l4.1 4.1q-.4.65-1.075 1.05T6 10m16.85 9.9L11.25 8.35l.2-.7q.35-1.2 1.338-1.925T15.025 5q1.225 0 2.188.713t1.337 1.862zm-21.7.1l3.45-6.9q.25-.5.712-.8T6.35 12q.6 0 1.1.313t.725.887l.675 1.65q.05.15.225.138t.225-.163l1.275-4.25L20 20z"></svg:path>`,
})
export class MaterialSymbolsLandscape2OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLandslideIcon],svg[material-symbols-landslide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-4.25l4 1.3l11.025-3.675L22 22zm4-5.05L2 15.6v-1.85l4 1.3l6.9-2.3l2.55 1.025zM18.5 14l4.5-2V8l-4.5-1L16 9v3zM6 12.95L2 11.6V8h6l2.575 3.425zM12 8l5-2V1l-5-1l-3 2v4z"></svg:path>`,
})
export class MaterialSymbolsLandslideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageIcon],svg[material-symbols-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2q2.075 0 3.888.788t3.174 2.15t2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22m0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075T12 19.95m-2.6-.4q-.45-.825-.787-1.713T8.05 16H5.1q.725 1.25 1.813 2.175T9.4 19.55m5.2 0q1.4-.45 2.488-1.375T18.9 16h-2.95q-.225.95-.562 1.838T14.6 19.55M4.25 14h3.4q-.075-.5-.112-.987T7.5 12t.038-1.012T7.65 10h-3.4q-.125.5-.187.988T4 12t.063 1.013t.187.987m5.4 0h4.7q.075-.5.113-.987T14.5 12t-.038-1.012T14.35 10h-4.7q-.075.5-.112.988T9.5 12t.038 1.013t.112.987m6.7 0h3.4q.125-.5.188-.987T20 12t-.062-1.012T19.75 10h-3.4q.075.5.113.988T16.5 12t-.038 1.013t-.112.987m-.4-6h2.95q-.725-1.25-1.812-2.175T14.6 4.45q.45.825.788 1.713T15.95 8M10.1 8h3.8q-.3-1.1-.775-2.075T12 4.05q-.65.9-1.125 1.875T10.1 8m-5 0h2.95q.225-.95.563-1.838T9.4 4.45Q8 4.9 6.912 5.825T5.1 8"></svg:path>`,
})
export class MaterialSymbolsLanguageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageChineseArrayIcon],svg[material-symbols-language-chinese-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.9 17.8v-5.3q-.275.275-.575.538t-.7.587q-.2-.275-.4-.525t-.425-.45q1.1-.775 1.988-1.725t1.612-2.1l1.075.425q-.35.6-.687 1.075T5.1 11.2v6.6zm5.925 0q-.3 0-.612-.012t-.638-.063q-.1-.425-.2-.675t-.225-.45h2.075q.125 0 .188-.062t.062-.188v-4.9H6.35v-1.1h7.2v1.125h-1.875V16.5q0 .425-.1.663t-.325.387q-.2.125-.525.188t-.9.062m-7.2-7.85q-.2-.225-.363-.462T1.926 9q1.025-.7 1.75-1.388T4.9 6.176l1.125.45q-.65.925-1.5 1.75t-1.9 1.575m4.25-1.875v-1.1H13.2l-.05 1.1zM17.55 15.65q.7 0 1.363-.325t1.212-.925v-2.65q-.575.075-1.062.175t-.913.225q-1.125.35-1.687.875T15.9 14.25q0 .65.45 1.025t1.2.375m-.575 1.7q-1.425 0-2.25-.812t-.825-2.213q0-1.3.825-2.125t2.65-1.325q.575-.15 1.263-.275t1.487-.225q-.05-1.175-.55-1.713t-1.55-.537q-.65 0-1.287.238T15.1 9.2l-.8-1.4q.825-.625 1.938-1.012T18.5 6.4q1.775 0 2.7 1.1t.925 3.2v6.425H20.45L20.3 16q-.7.625-1.537.988t-1.788.362"></svg:path>`,
})
export class MaterialSymbolsLanguageChineseArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageChineseCangjieIcon],svg[material-symbols-language-chinese-cangjie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.825 17.75q-.175-.25-.4-.437t-.475-.338Q2.925 16 3.4 14.713t.475-2.663v-1.9H11.5v3.675H4.925q-.2 1.15-.675 2.2T2.825 17.75m2.225-4.825h5.275V11.05H5.05zm-2.6-1.95q-.125-.275-.3-.5t-.375-.425q1.525-.65 2.85-1.6t2.425-2.2h1.1q1.175 1.2 2.588 2.063T13.65 9.9q-.225.225-.413.475t-.312.525q-1.425-.725-2.787-1.562T7.65 7.375q-1.075 1.2-2.387 2.1t-2.813 1.5m2.425 6.775v-3.5h7v3.5h-1.1v-2.525h-4.8v2.525zm.45-8.075v-.9h4.725v.9zM4.4 12.4v-.85h6.675v.85zm.825 4.975v-.95h6.05v.95zM17.55 15.65q.7 0 1.363-.325t1.212-.925v-2.65q-.575.075-1.062.175t-.913.225q-1.125.35-1.687.875T15.9 14.25q0 .65.45 1.025t1.2.375m-.575 1.7q-1.425 0-2.25-.812t-.825-2.213q0-1.3.825-2.125t2.65-1.325q.575-.15 1.263-.275t1.487-.225q-.05-1.175-.55-1.713t-1.55-.537q-.65 0-1.287.238T15.1 9.2l-.8-1.4q.825-.625 1.938-1.012T18.5 6.4q1.775 0 2.7 1.1t.925 3.2v6.425H20.45L20.3 16q-.7.625-1.537.988t-1.788.362"></svg:path>`,
})
export class MaterialSymbolsLanguageChineseCangjieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageChineseDayiIcon],svg[material-symbols-language-chinese-dayi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.55 15.65q.7 0 1.363-.325t1.212-.925v-2.65q-.575.075-1.062.175t-.913.225q-1.125.35-1.687.875T15.9 14.25q0 .65.45 1.025t1.2.375m-.575 1.7q-1.425 0-2.25-.812t-.825-2.213q0-1.3.825-2.125t2.65-1.325q.575-.15 1.263-.275t1.487-.225q-.05-1.175-.55-1.713t-1.55-.537q-.65 0-1.287.238T15.1 9.2l-.8-1.4q.825-.625 1.938-1.012T18.5 6.4q1.775 0 2.7 1.1t.925 3.2v6.425H20.45L20.3 16q-.7.625-1.537.988t-1.788.362m-14.35.275q-.275-.35-.475-.575t-.4-.35q1.9-.825 3.05-2.125t1.65-3.55H2.1V9.85h4.55q.1-.75.15-1.6t.05-1.8H8.1q0 .95-.038 1.788T7.9 9.85h4.925v1.175H8.35q.65 2.025 1.875 3.463t2.85 2.087q-.2.2-.387.425t-.463.625q-1.575-.7-2.8-2.137T7.45 12q-.6 2.075-1.787 3.425t-3.038 2.2"></svg:path>`,
})
export class MaterialSymbolsLanguageChineseDayiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageChinesePinyinIcon],svg[material-symbols-language-chinese-pinyin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 12.3h1.4v-2.05H8.5zm-5.975 5.2L2.1 16.375h.975q.125 0 .238-.088t.112-.212V13.55l-1.3.425l-.275-1.1l1.575-.475v-2.25h-1.4V9.1h1.4V6.8h1.1v2.3H5.65v1.05H4.5v1.925l1-.325l.15 1.05l-1.15.4v3.125q0 .45-.262.813t-.688.362zM6 17.65l-.725-.8q.875-.575 1.438-1.475T7.3 13.4H5.6v-1.125h1.8V10.25H6.05V9.225h6.325v1.1H10.95V12.4h1.75l-.05 1h-1.7v4.125h-1.1V13.4H8.4q-.05 1.3-.687 2.413T6 17.65m4.825-8.175L9.8 9.225l.55-1.2q.275-.6.475-1.225l1.125.4q-.25.575-.537 1.138t-.588 1.137M7.8 9.425Q7.55 8.85 7.275 8.3T6.65 7.25l1-.425q.35.5.625 1.05T8.8 9zm9.75 6.225q.7 0 1.363-.325t1.212-.925v-2.65q-.575.075-1.062.175t-.913.225q-1.125.35-1.687.875T15.9 14.25q0 .65.45 1.025t1.2.375m-.575 1.7q-1.425 0-2.25-.812t-.825-2.213q0-1.3.825-2.125t2.65-1.325q.575-.15 1.263-.275t1.487-.225q-.05-1.175-.55-1.713t-1.55-.537q-.65 0-1.287.238T15.1 9.2l-.8-1.4q.825-.625 1.938-1.012T18.5 6.4q1.775 0 2.7 1.1t.925 3.2v6.425H20.45L20.3 16q-.7.625-1.537.988t-1.788.362"></svg:path>`,
})
export class MaterialSymbolsLanguageChinesePinyinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageChineseQuickIcon],svg[material-symbols-language-chinese-quick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.45 17.55l-.625-1.075q.525-.275.975-.638t.9-.737v-2.875H2.025v-1.1H4.85v3.9q.5.625 1.25.95t1.55.325q1.4 0 2.787-.025t2.788-.1q-.125.275-.225.575t-.175.6q-1.3.05-2.588.025T7.65 17.35q-.95 0-1.85-.325T4.25 16q-.425.425-.875.813t-.925.737M8.4 16.1v-2.65q-.55.725-1.25 1.275t-1.45 1.05q-.175-.225-.363-.437t-.412-.413q.875-.375 1.613-.95t1.312-1.3h-2.1V9.45h2.675V8.7H5.25V7.675h3.175v-1.2h1.1v1.2h3.4V8.7h-3.4v.75h2.825v3.2h-2.275q.625.725 1.375 1.275t1.625.925q-.25.2-.462.413t-.338.487q-.8-.425-1.487-1.012t-1.263-1.263V16.1zm0-5.675H6.875V11.7H8.4zm2.85 0H9.5V11.7h1.75zM4.3 9.5q-.425-.65-.987-1.162T2.075 7.45l.85-.725q.65.425 1.188.95T5.2 8.75zm15.825 4.9v-2.65q-.575.075-1.062.175t-.913.225q-1.125.35-1.687.875T15.9 14.25q0 .65.45 1.025t1.2.375q.7 0 1.363-.325t1.212-.925m.325 2.725L20.3 16q-.7.625-1.537.988t-1.788.362q-1.425 0-2.25-.812t-.825-2.213q0-1.3.825-2.125t2.65-1.325q.575-.15 1.263-.275t1.487-.225q-.05-1.175-.55-1.713t-1.55-.537q-.65 0-1.287.238T15.1 9.2l-.8-1.4q.825-.625 1.938-1.012T18.5 6.4q1.775 0 2.7 1.1t.925 3.2v6.425z"></svg:path>`,
})
export class MaterialSymbolsLanguageChineseQuickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageChineseWubiIcon],svg[material-symbols-language-chinese-wubi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.55 15.65q.7 0 1.363-.325t1.212-.925v-2.65q-.575.075-1.062.175t-.913.225q-1.125.35-1.687.875T15.9 14.25q0 .65.45 1.025t1.2.375m-.575 1.7q-1.425 0-2.25-.812t-.825-2.213q0-1.3.825-2.125t2.65-1.325q.575-.15 1.263-.275t1.487-.225q-.05-1.175-.55-1.713t-1.55-.537q-.65 0-1.287.238T15.1 9.2l-.8-1.4q.825-.625 1.938-1.012T18.5 6.4q1.775 0 2.7 1.1t.925 3.2v6.425H20.45L20.3 16q-.7.625-1.537.988t-1.788.362m-10.8-1.05H10.4v-4.025H7.05q-.2 1.025-.412 2.025t-.463 2m-4.3 1.2v-1.2H4.85q.25-1 .463-2t.412-2.025H3.2v-1.25h2.75q.125-.65.238-1.325t.237-1.325h-3.7v-1.2h10.1v1.2h-5.05q-.125.65-.25 1.325t-.25 1.325H11.6V16.3h2.2v1.2z"></svg:path>`,
})
export class MaterialSymbolsLanguageChineseWubiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageFrenchIcon],svg[material-symbols-language-french-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17V7h7v2H6v2h4v2H6v4zm9 0V7h5q.825 0 1.413.588T20 9v2q0 .8-.55 1.363t-1.3.637L20 17h-2.1l-1.875-4H15v4zm2-6h3V9h-3z"></svg:path>`,
})
export class MaterialSymbolsLanguageFrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageGbEnglishIcon],svg[material-symbols-language-gb-english-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15h4v-2h-4zm0-4h4V9h-4zM5 17q-.825 0-1.412-.587T3 15V9q0-.825.588-1.412T5 7h4q.825 0 1.413.588T11 9H5v6h4v-2H7v-2h4v4q0 .825-.587 1.413T9 17zm8 0V7h6q.825 0 1.413.588T21 9v1.5q0 .625-.437 1.063T19.5 12q.625 0 1.063.438T21 13.5V15q0 .825-.587 1.413T19 17z"></svg:path>`,
})
export class MaterialSymbolsLanguageGbEnglishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageInternationalIcon],svg[material-symbols-language-international-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 16V8h2v8zm3 0V8h2l2.225 4.45L8 12.5V8h2v8H8l-2.225-4.45L6 11.5V16zm9 0v-6h-2V8h6v2h-2v6zm5 0V8h2v6h3v2z"></svg:path>`,
})
export class MaterialSymbolsLanguageInternationalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageJapaneseKanaIcon],svg[material-symbols-language-japanese-kana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.15 18l-.75-1.2q2-.2 3.125-1.075t1.125-2.25q0-.75-.513-1.375T9.8 11.2q-.575 1.425-1.362 2.55T6.7 15.7q.075.3.163.6t.187.6l-1.25.375q-.075-.25-.125-.437t-.1-.338q-.65.35-1.225.538t-1.125.187q-.8 0-1.3-.525t-.5-1.4q0-1.325 1-2.625T5 10.625l.05-.937q.025-.462.075-.938q-.7.025-1.475-.012t-1.675-.113L1.95 7.3q.65.125 1.4.163t1.925.037q.05-.45.113-.888t.012-.887l1.5.025q-.175.425-.25.862t-.15.863Q7.95 7.4 9.175 7.25t2.3-.4l.025 1.3q-1.325.2-2.587.337T6.375 8.7q-.05.35-.062.725t-.063.725q.7-.2 1.363-.275t1.312-.025q.075-.25.113-.5t.062-.5l1.425.35q-.075.2-.162.4t-.163.475q1.275.35 2.038 1.3T13 13.5q0 1.75-1.287 2.938T8.15 18m-4.7-2.125q.425 0 .875-.175t.95-.525q-.175-.95-.25-1.725t-.075-1.475q-.95.6-1.575 1.475T2.75 15.1q0 .325.213.55t.487.225M6.4 14.25q.725-.7 1.263-1.513T8.55 11q-.575 0-1.162.1t-1.188.3q-.05.65.013 1.35t.187 1.5m11.15 1.4q.7 0 1.363-.325t1.212-.925v-2.65q-.575.075-1.062.175t-.913.225q-1.125.35-1.687.875T15.9 14.25q0 .65.45 1.025t1.2.375m-.575 1.7q-1.425 0-2.25-.812t-.825-2.213q0-1.3.825-2.125t2.65-1.325q.575-.15 1.263-.275t1.487-.225q-.05-1.175-.55-1.713t-1.55-.537q-.65 0-1.287.238T15.1 9.2l-.8-1.4q.825-.625 1.938-1.012T18.5 6.4q1.775 0 2.7 1.1t.925 3.2v6.425H20.45L20.3 16q-.7.625-1.537.988t-1.788.362"></svg:path>`,
})
export class MaterialSymbolsLanguageJapaneseKanaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageKoreanLatinIcon],svg[material-symbols-language-korean-latin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.4 12.575q.65 0 1.113-.287t.462-.863t-.462-.875t-1.113-.3t-1.112.3t-.463.875t.463.863t1.112.287M1.875 8.8V7.7h2.85V6.3h1.3v1.4H8.9v1.1zM5.4 13.675q-1.175 0-2.013-.587t-.837-1.663q0-1.1.838-1.675T5.4 9.175q1.2 0 2.038.575t.837 1.675t-.837 1.675t-2.038.575M3.575 17.7v-3.5H4.9v2.4h6.6v1.1zM9.7 15.075V6.3h1.275v3.75H12.7v1.1H11v3.925zm7.85.575q.7 0 1.363-.325t1.212-.925v-2.65q-.575.075-1.062.175t-.913.225q-1.125.35-1.687.875T15.9 14.25q0 .65.45 1.025t1.2.375m-.575 1.7q-1.425 0-2.25-.812t-.825-2.213q0-1.3.825-2.125t2.65-1.325q.575-.15 1.263-.275t1.487-.225q-.05-1.175-.55-1.713t-1.55-.537q-.65 0-1.287.238T15.1 9.2l-.8-1.4q.825-.625 1.938-1.012T18.5 6.4q1.775 0 2.7 1.1t.925 3.2v6.425H20.45L20.3 16q-.7.625-1.537.988t-1.788.362"></svg:path>`,
})
export class MaterialSymbolsLanguageKoreanLatinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguagePinyinIcon],svg[material-symbols-language-pinyin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12h2V9h-2zm-9.5 8L4 18h1.5q.2 0 .35-.15T6 17.5v-3.125l-.825.338q-.4.163-.775.287L4 13.05q.475-.1.988-.275T6 12.4V9H4.5V7H6V4h2v3h1.5v2H8v2.4q.375-.225.725-.45t.675-.45v2q-.3.25-.65.488t-.75.437V18.5q0 .575-.462 1.038T6.5 20zm5.55 0l-1.1-1.65q1.05-.7 1.813-1.875T11.825 14H10v-2h2V9h-1.5V7h9v2H18v3h2v2h-2v6h-2v-6h-2.15q-.35 1.775-1.362 3.413T10.05 20m7.2-12.25L15.525 7q.4-.675.888-1.475T17.2 4l1.85.675q-.375.725-.875 1.55T17.25 7.75m-4.725-.2q-.425-.625-.975-1.375T10.5 4.85L12.3 4q.45.575.963 1.3t.937 1.325z"></svg:path>`,
})
export class MaterialSymbolsLanguagePinyinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageSpanishIcon],svg[material-symbols-language-spanish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17q-.825 0-1.412-.587T13 15v-1h2v1h3v-2h-3q-.825 0-1.412-.587T13 11V9q0-.825.588-1.412T15 7h3q.825 0 1.413.588T20 9v1h-2V9h-3v2h3q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17zM4 7h7v2H6v2h4v2H6v2h5v2H4z"></svg:path>`,
})
export class MaterialSymbolsLanguageSpanishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageUsIcon],svg[material-symbols-language-us-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17q-.825 0-1.412-.587T4 15V7h2v8h3V7h2v8q0 .825-.587 1.413T9 17zm9 0q-.825 0-1.412-.587T13 15v-1h2v1h3v-2h-3q-.825 0-1.412-.587T13 11V9q0-.825.588-1.412T15 7h3q.825 0 1.413.588T20 9v1h-2V9h-3v2h3q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17z"></svg:path>`,
})
export class MaterialSymbolsLanguageUsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageUsColemakIcon],svg[material-symbols-language-us-colemak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 15H18V9h-3.5zM6 17q-.825 0-1.412-.587T4 15V9q0-.825.588-1.412T6 7h4.5v2H6v6h4.5v2zm8.5 0q-.825 0-1.412-.587T12.5 15V9q0-.825.588-1.412T14.5 7H18q.825 0 1.413.588T20 9v6q0 .825-.587 1.413T18 17z"></svg:path>`,
})
export class MaterialSymbolsLanguageUsColemakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageUsDvorakIcon],svg[material-symbols-language-us-dvorak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15h3.25V9H6zm-2 2V7h5.25q.825 0 1.413.588T11.25 9v6q0 .825-.587 1.413T9.25 17zm11.625 0L12.25 7h2l2.375 6.95L19 7h2l-3.375 10z"></svg:path>`,
})
export class MaterialSymbolsLanguageUsDvorakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLapsIcon],svg[material-symbols-laps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 21l-1.425-1.4l1.6-1.6H9q-2.925 0-4.962-2.037T2 11t2.038-4.962T9 4h6q2.925 0 4.963 2.038T22 11t-2.037 4.963T15 18v-2q2.075 0 3.538-1.463T20 11t-1.463-3.537T15 6H9Q6.925 6 5.463 7.463T4 11t1.463 3.563T9 16.2h.4l-1.8-1.8L9 13l4 4z"></svg:path>`,
})
export class MaterialSymbolsLapsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLaptopCarIcon],svg[material-symbols-laptop-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20v-3h2V6q0-.825.588-1.412T5 4h13q.825 0 1.413.588T20 6v3h-7.65q-.925 0-1.712.488T9.55 10.85L8 15.3V20zm9.65 2q-.275 0-.462-.187T10 21.35v-5.575l1.425-4.1q.125-.3.375-.488t.575-.187h7.25q.325 0 .575.188t.375.487l1.425 4.1v5.575q0 .275-.187.463T21.35 22h-.7q-.275 0-.462-.187T20 21.35v-.85h-8v.85q0 .275-.187.463T11.35 22zm1.2-7h8.3l-.875-2.5h-6.55zm1.65 3.75q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m5 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287"></svg:path>`,
})
export class MaterialSymbolsLaptopCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLaptopChromebookIcon],svg[material-symbols-laptop-chromebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 20v-2h2V3h20v15h2v2zm10-2h4v-1h-4z"></svg:path>`,
})
export class MaterialSymbolsLaptopChromebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLaptopMacIcon],svg[material-symbols-laptop-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20q-.825 0-1.412-.587T0 18h4q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18h4q0 .825-.587 1.413T22 20zm10-1q.425 0 .713-.288T13 18t-.288-.712T12 17t-.712.288T11 18t.288.713T12 19"></svg:path>`,
})
export class MaterialSymbolsLaptopMacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLaptopWindowsIcon],svg[material-symbols-laptop-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 20v-2h4v-1q-.825 0-1.412-.587T2 15V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v10q0 .825-.587 1.413T20 17v1h4v2z"></svg:path>`,
})
export class MaterialSymbolsLaptopWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLassoSelectIcon],svg[material-symbols-lasso-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.025 11.1l-2-.2q.15-1.15.513-2.237T3.525 6.6l1.7 1.05q-.5.775-.787 1.65t-.413 1.8m.9 7.9Q4.1 18.2 3.5 17.237T2.525 15.2l1.9-.65q.3.875.775 1.638T6.325 17.6zm2.75-13.8l-1.05-1.7q.975-.625 2.063-.988T10.925 2l.2 2q-.925.125-1.8.413t-1.65.787m4.3 16.75q-.875 0-1.737-.137t-1.663-.463l.65-1.9q.675.225 1.35.363t1.4.137zm5.65-15.65q-.65-.65-1.412-1.125T14.574 4.4l.65-1.9q1.075.375 2.038.975T19.025 4.9zm2.15 14.85l-2.8-2.8v2.6h-2v-6h6v2h-2.6l2.8 2.8zm.2-9.2q0-.725-.138-1.4t-.362-1.35l1.9-.65q.325.8.463 1.663t.137 1.737z"></svg:path>`,
})
export class MaterialSymbolsLassoSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLastPageIcon],svg[material-symbols-last-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 18l-1.4-1.4l4.6-4.6l-4.6-4.6L7 6l6 6zm9 0V6h2v12z"></svg:path>`,
})
export class MaterialSymbolsLastPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLauncherAssistantOffIcon],svg[material-symbols-launcher-assistant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-4q2.525 0 4.263-1.75T18 12q0-2.525-1.738-4.263T12 6Q9.5 6 7.75 7.738T6 12q0 2.5 1.75 4.25T12 18Zm0 2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Z"></svg:path>`,
})
export class MaterialSymbolsLauncherAssistantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLauncherAssistantOnIcon],svg[material-symbols-launcher-assistant-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-4q2.525 0 4.263-1.75T18 12q0-2.525-1.738-4.263T12 6Q9.5 6 7.75 7.738T6 12q0 2.5 1.75 4.25T12 18Zm0 1.5q3.15 0 5.325-2.175T19.5 12q0-3.15-2.175-5.325T12 4.5q-3.15 0-5.325 2.175T4.5 12q0 3.15 2.175 5.325T12 19.5Z"></svg:path>`,
})
export class MaterialSymbolsLauncherAssistantOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLaundryIcon],svg[material-symbols-laundry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13.975v-3L4.125 12l-3-5.2l6.6-3.8H9q.4 1.2.95 2.1T12 6t2.05-.9T15 3h1.275l6.575 3.825L19.875 12L18 10.975v4.8l-1.575 1.375q-.175.15-.4.238t-.45.087q-.15 0-.35-.1t-.4-.25l-2.65-2.275q-.8-.7-1.8-1.025T8.35 13.5q-.6 0-1.188.113T6 13.975m-1.35 5.4l-1.3-1.525L5.525 16q.575-.5 1.313-.763t1.537-.262t1.525.263t1.3.762l2.9 2.475q.3.25.713.388t.837.137q.45 0 .838-.125t.687-.4L19.35 16.6l1.3 1.55L18.475 20q-.575.5-1.3.75T15.65 21t-1.537-.25T12.8 20l-2.9-2.475q-.3-.25-.687-.387T8.375 17q-.425 0-.837.138t-.713.387z"></svg:path>`,
})
export class MaterialSymbolsLaundryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLayersIcon],svg[material-symbols-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21.05l-9-7l1.65-1.25L12 18.5l7.35-5.7L21 14.05zM12 16L3 9l9-7l9 7z"></svg:path>`,
})
export class MaterialSymbolsLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLayersClearIcon],svg[material-symbols-layers-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.1 12.8L8.25 4.9L12 2l9 7zm2.875 2.85l-1.45-1.45l1.825-1.4L21 14.05zm.825 6.45l-4-4l-3.8 2.95l-9-7l1.65-1.25L12 18.5l2.35-1.825l-1.425-1.4L12 16L3 9l2.075-1.625l-3.7-3.65L2.8 2.3l18.4 18.4z"></svg:path>`,
})
export class MaterialSymbolsLayersClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLdaIcon],svg[material-symbols-lda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22v-3.425L5 16.05V11h6V8h-1q-.825 0-1.412-.587T8 6V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2q0 .825-.587 1.413T14 8h-1v3h6v5.05l-6 2.525V22zm0-5.6V13H7v1.725zm2 0l4-1.675V13h-4z"></svg:path>`,
})
export class MaterialSymbolsLdaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLeaderboardIcon],svg[material-symbols-leaderboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V9h5.5v12zm7.25 0V3h5.5v18zm7.25 0V11H22v10z"></svg:path>`,
})
export class MaterialSymbolsLeaderboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLeafSparkIcon],svg[material-symbols-leaf-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22q-1.4 0-2.638-.45T9.1 20.3l-1.4 1.4q-.3.3-.7.3t-.7-.3Q6 21.4 6 21t.3-.7l1.4-1.4q-.8-1.025-1.25-2.262T6 14q0-3.45 2.388-5.725T14 6h8v8q0 1.55-.588 3t-1.762 2.65q-1.2 1.175-2.65 1.763T14 22ZM5.5 10q0-1.875 1.313-3.188T10 5.5q-1.875 0-3.188-1.313T5.5 1q0 1.875-1.313 3.188T1 5.5q1.875 0 3.188 1.313T5.5 10Zm8.8 2.3l-4.475 4.475q-.3.3-.287.7t.287.7q.3.3.7.313t.7-.288l4.475-4.5q.3-.3.3-.7t-.3-.7q-.3-.3-.7-.3t-.7.3Z"></svg:path>`,
})
export class MaterialSymbolsLeafSparkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLeakAddIcon],svg[material-symbols-leak-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14v-2q1.85 0 3.488-.712T9.35 9.35t1.938-2.863T12 3h2q0 2.275-.862 4.275t-2.363 3.5t-3.5 2.363T3 14m0-4V8q2.075 0 3.538-1.463T8 3h2q0 2.9-2.05 4.95T3 10m0-4V3h3q0 1.25-.875 2.125T3 6m7 15q0-2.275.863-4.275t2.362-3.5t3.5-2.362T21 10v2q-1.85 0-3.488.713T14.65 14.65t-1.937 2.863T12 21zm4 0q0-2.9 2.05-4.95T21 14v2q-2.075 0-3.537 1.463T16 21zm4 0q0-1.25.875-2.125T21 18v3z"></svg:path>`,
})
export class MaterialSymbolsLeakAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLeakRemoveIcon],svg[material-symbols-leak-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.75 22.6l-3.4-3.45q-.15.45-.25.9T16 21h-2q0-.9.213-1.75t.637-1.6L13.4 16.2q-.675 1.05-1.038 2.263T12 21h-2q0-1.725.5-3.312t1.45-2.938l-2.7-2.7q-1.35.9-2.937 1.425T3 14v-2q1.325 0 2.538-.363T7.8 10.6L6.35 9.15q-.75.425-1.6.638T3 10V8q.5 0 .938-.1t.862-.25L1.4 4.2l1.4-1.4l18.4 18.4zm-.55-6.25l-1.55-1.5q.75-.425 1.6-.637T21 14v2q-.5 0-.937.075t-.863.275m-3-2.95l-1.45-1.45q1.35-.95 2.938-1.45T21 10v2q-1.325 0-2.537.363T16.2 13.4m-4.15-4.2L10.6 7.75q.675-1.025 1.038-2.225T12 3h2q0 1.725-.5 3.3t-1.45 2.9m-2.9-2.9l-1.5-1.5q.15-.425.25-.862T8 3h2q0 .9-.213 1.738T9.15 6.3"></svg:path>`,
})
export class MaterialSymbolsLeakRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLeftClickIcon],svg[material-symbols-left-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.7 18q-2.4-.125-4.05-1.85T6 12q0-2.5 1.75-4.25T12 6q2.425 0 4.15 1.65T18 11.7l-2.1-.625q-.325-1.35-1.4-2.212T12 8q-1.65 0-2.825 1.175T8 12q0 1.425.863 2.5t2.212 1.4zm8.825 4.5l-4.275-4.275L15 22l-3-10l10 3l-3.775 1.25l4.275 4.275z"></svg:path>`,
})
export class MaterialSymbolsLeftClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLeftPanelCloseIcon],svg[material-symbols-left-panel-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 16V8l-4 4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm5-2h9V5h-9z"></svg:path>`,
})
export class MaterialSymbolsLeftPanelCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLeftPanelOpenIcon],svg[material-symbols-left-panel-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 8v8l4-4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm5-2h9V5h-9z"></svg:path>`,
})
export class MaterialSymbolsLeftPanelOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLegendToggleIcon],svg[material-symbols-legend-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19v-2h16v2zm0-4v-2h16v2zm0-4V8.65L10 5l5 3.55L20 5v2.45L15 11L9.925 7.4z"></svg:path>`,
})
export class MaterialSymbolsLegendToggleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLetterSwitchIcon],svg[material-symbols-letter-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22v-6h2v2.775q1.05-1.5 1.525-3.238T19 12t-.475-3.537T17 5.225V8h-2V2h6v2h-2.425q1.25 1.75 1.838 3.8T21 12t-.587 4.2t-1.838 3.8H21v2zm-7.35-5.05H5.9v1.2h1.75zm2.95 0H8.85v1.2h1.75zm-.025-4.225v.75h1.975v1.1h-1.975v.875H9.5v-.875H6.975v.875H5.9v-.875H3.925v-1.1H5.9v-.75h1.075v.75H9.5v-.75zM4.35 22q-.125-.3-.312-.587T3.6 20.9q1.05-.15 2.038-.462T7.2 19.25H3.8v-1.075h1v-2.3h2.825V14.9h1.2v.975h2.95v2.3h.875v1.075h-3.4q.725.725 1.65 1.15t1.975.5q-.2.25-.363.525t-.287.575q-1.175-.125-2.187-.687T8.3 19.8q-.625 1-1.713 1.463T4.35 22m.875-11.6l-1.2-.55Q4.75 8.825 5.238 7.7T6 5.375H4.025v-1.3H6.3q.1-.5.15-1.025T6.525 2l1.325.45q0 .45-.1.875t-.225.85H8.3q.725 0 1.225.562t.525 1.313q.025.9-.112 1.775T9.5 9.55q-.075.225-.238.425T8.9 10.3t-.45.2t-.5.025l-1.2-.225l-.2-1.2h1.2q.225 0 .45-.062t.3-.263q.225-.65.288-1.337t.037-1.388q0-.35-.262-.612t-.613-.263H7.3q-.325 1.375-.837 2.688T5.224 10.4m6.025-7.1q.525.85.963 1.75T13 6.9l-1.3.55q-.2-.975-.625-1.888T10.05 3.85z"></svg:path>`,
})
export class MaterialSymbolsLetterSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLibraryAddIcon],svg[material-symbols-library-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14h2v-3h3V9h-3V6h-2v3h-3v2h3zm-5 4q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"></svg:path>`,
})
export class MaterialSymbolsLibraryAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLibraryAddCheckIcon],svg[material-symbols-library-add-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.7 14.05l5.65-5.65l-1.4-1.45l-4.25 4.25l-2.15-2.1l-1.4 1.4zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"></svg:path>`,
})
export class MaterialSymbolsLibraryAddCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLibraryBooksIcon],svg[material-symbols-library-books-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14h4v-2h-4zm0-3h8V9h-8zm0-3h8V6h-8zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"></svg:path>`,
})
export class MaterialSymbolsLibraryBooksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLibraryMusicIcon],svg[material-symbols-library-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 15q1.05 0 1.775-.725T15 12.5V7h3V5h-4v5.5q-.325-.25-.7-.375T12.5 10q-1.05 0-1.775.725T10 12.5t.725 1.775T12.5 15M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"></svg:path>`,
})
export class MaterialSymbolsLibraryMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLicenseIcon],svg[material-symbols-license-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13q-1.25 0-2.125-.875T9 10t.875-2.125T12 7t2.125.875T15 10t-.875 2.125T12 13M6 23v-7.725q-.95-1.05-1.475-2.4T4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.525-.525 2.875T18 15.275V23l-6-2zm6-7q2.5 0 4.25-1.75T18 10t-1.75-4.25T12 4T7.75 5.75T6 10t1.75 4.25T12 16"></svg:path>`,
})
export class MaterialSymbolsLicenseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLiftToTalkIcon],svg[material-symbols-lift-to-talk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.1 22q-.175 0-.35-.038t-.35-.087l-6.075-2.25q-.6-.225-.95-.737t-.35-1.113q0-.125.125-.7L7.675 10H6.2l2.65-3.975q.125-.15.088-.325t-.163-.3l-.35-.35l-5.075 4.4q-.425.35-.637.838T2.5 11.325V17.5H1v-6.175q0-.875.363-1.662T2.375 8.3L8.5 3l1.225 1.225l.325-.9q.225-.6.737-.963T11.926 2q.2 0 .363.025t.362.1l6.075 2.25q.6.225.95.75t.35 1.125q0 .15-.125.675l-.575 1.6q.725.125 1.2.675T21 10.5q0 .125-.012.25t-.063.25H21q.825 0 1.413.588T23 13q0 .6-.312 1.075t-.813.725q.05.175.088.338T22 15.5q0 .825-.587 1.413T20 17.5h-.075q.05.125.063.25T20 18q0 .825-.587 1.413T18 20h-2.775l-.225.675q-.2.625-.737.975T13.1 22m.65-3.825L17.35 8.1l-6.075-2.25l-3.6 10.075zm2 .325H18q.2 0 .35-.15t.15-.35t-.15-.35t-.35-.15h-1.875zm.9-2.5H20q.2 0 .35-.15t.15-.35t-.15-.35T20 15h-2.975zm.9-2.5H21q.2 0 .35-.15t.15-.35t-.15-.35t-.35-.15h-3.1zm.9-2.5H19q.2 0 .35-.15t.15-.35t-.15-.35T19 10h-.2z"></svg:path>`,
})
export class MaterialSymbolsLiftToTalkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightIcon],svg[material-symbols-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.65 0-2.825-1.175T8 17H5q-.825 0-1.412-.587T3 15q0-3.5 2.3-6.038T11 6.05V3h2v3.05q3.4.375 5.7 2.913T21 15q0 .825-.587 1.413T19 17h-3q0 1.65-1.175 2.825T12 21m-7-6h14q0-2.9-2.05-4.95T12 8t-4.95 2.05T5 15"></svg:path>`,
})
export class MaterialSymbolsLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGroupIcon],svg[material-symbols-light-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22v-2h8v2zm14-1q-.825 0-1.412-.587T15 19h-3q-.425 0-.712-.288T11 18q-.05-2.25 1.4-3.9t3.6-2V2h2v10.1q2.175.35 3.613 2T23 18q0 .425-.288.713T22 19h-3q0 .825-.575 1.413T17 21M6 19v-8H2q-.5 0-.788-.387T1.05 9.75l1.875-7q.1-.325.363-.537T3.9 2h6.225q.35 0 .613.213t.362.537l1.875 7q.125.475-.162.863t-.788.387H8v8z"></svg:path>`,
})
export class MaterialSymbolsLightGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightModeIcon],svg[material-symbols-light-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"></svg:path>`,
})
export class MaterialSymbolsLightModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOffIcon],svg[material-symbols-light-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m5.45-7.4L6.85 4.05q1.025-.95 2.338-1.5T12 2q3.125 0 5.313 2.188T19.5 9.5q0 1.775-.625 3.038T17.45 14.6m3.75 6.6l-1.425 1.425L13.15 16h-4.9q-1.725-1.025-2.738-2.75T4.5 9.5q0-.5.063-.975T4.75 7.6L1.4 4.2l1.4-1.4zM16.15 17v2H8v-2z"></svg:path>`,
})
export class MaterialSymbolsLightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightbulbIcon],svg[material-symbols-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-3v-2h8v2zm.25-3q-1.725-1.025-2.738-2.75T4.5 9.5q0-3.125 2.188-5.312T12 2t5.313 2.188T19.5 9.5q0 2.025-1.012 3.75T15.75 16z"></svg:path>`,
})
export class MaterialSymbolsLightbulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightbulb2Icon],svg[material-symbols-lightbulb-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18q-.825 0-1.412-.587T8 16v-1.25q-1.425-.975-2.212-2.5T5 9q0-2.925 2.038-4.962T12 2t4.963 2.038T19 9q0 1.725-.788 3.238T16 14.75V16q0 .825-.587 1.413T14 18zm0 4q-.425 0-.712-.288T9 21v-1h6v1q0 .425-.288.713T14 22z"></svg:path>`,
})
export class MaterialSymbolsLightbulb2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightbulbCircleIcon],svg[material-symbols-lightbulb-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-3q.625 0 1.063-.437T13.5 17.5h-3q0 .625.438 1.063T12 19m-3-2.5h6V15H9zm.025-2.5h5.95q.925-.675 1.475-1.713T17 10q0-2.075-1.462-3.537T12 5T8.463 6.463T7 10q0 1.25.55 2.288T9.025 14m.55-1.5q-.5-.5-.787-1.137T8.5 10q0-1.45 1.025-2.475T12 6.5t2.475 1.025T15.5 10q0 .725-.288 1.363t-.787 1.137z"></svg:path>`,
})
export class MaterialSymbolsLightbulbCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightningStandIcon],svg[material-symbols-lightning-stand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-3.425 0-5.212-.888T5 18.5q0-.725.325-1.325T6.3 16.15q-.15.2-.237.488t-.088.637q0 .95.688 1.5t1.65.825t1.987.338T12 20t1.7-.062t1.988-.338t1.65-.825t.687-1.5q0-.35-.088-.637t-.237-.488q.65.425.975 1.025T19 18.5q0 1.725-1.787 2.613T12 22m0-3q-2.3 0-3.65-.537T7 17q0-.875 1.388-1.437T12 15q2.3 0 3.65.538T17 17t-1.35 1.463T12 19m-1-5V9H9l4-7v5h2z"></svg:path>`,
})
export class MaterialSymbolsLightningStandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineAxisIcon],svg[material-symbols-line-axis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 19L2 17.5L9.5 10l4 4l1.675-1.9l-5.6-5.175L3.5 13L2 11.5L9.5 4l7.1 6.525L20.6 6L22 7.4l-3.95 4.45L22 15.5L20.5 17l-3.85-3.55L13.5 17l-4-4z"></svg:path>`,
})
export class MaterialSymbolsLineAxisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineCurveIcon],svg[material-symbols-line-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20q0-2.9-1.1-5.45t-3-4.45t-4.45-3T4 6V4q3.3 0 6.213 1.263T15.3 8.7t3.438 5.088T20 20z"></svg:path>`,
})
export class MaterialSymbolsLineCurveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineEndIcon],svg[material-symbols-line-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 14.5q-.775 0-1.4-.425T17.2 13H2v-2h15.2q.275-.65.9-1.075t1.4-.425q1.05 0 1.775.725T22 12t-.725 1.775t-1.775.725"></svg:path>`,
})
export class MaterialSymbolsLineEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineEndArrowIcon],svg[material-symbols-line-end-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v-6H2v-2h9V5l11 7z"></svg:path>`,
})
export class MaterialSymbolsLineEndArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineEndArrowNotchIcon],svg[material-symbols-line-end-arrow-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 19l3.425-6H2v-2h12.425L11 5l11 7z"></svg:path>`,
})
export class MaterialSymbolsLineEndArrowNotchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineEndCircleIcon],svg[material-symbols-line-end-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18q-2.25 0-3.912-1.425T10.075 13H2v-2h8.075q.35-2.15 2.013-3.575T16 6q2.5 0 4.25 1.75T22 12t-1.75 4.25T16 18"></svg:path>`,
})
export class MaterialSymbolsLineEndCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineEndDiamondIcon],svg[material-symbols-line-end-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 19l-6-6H2v-2h7l6-6l7 7z"></svg:path>`,
})
export class MaterialSymbolsLineEndDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineEndSquareIcon],svg[material-symbols-line-end-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.5V13H2v-2h9V6.5h11v11z"></svg:path>`,
})
export class MaterialSymbolsLineEndSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineStartIcon],svg[material-symbols-line-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 14.5q-1.05 0-1.775-.725T2 12t.725-1.775T4.5 9.5q.775 0 1.4.425T6.8 11H22v2H6.8q-.275.65-.9 1.075t-1.4.425"></svg:path>`,
})
export class MaterialSymbolsLineStartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineStartArrowIcon],svg[material-symbols-line-start-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19L2 12l11-7v6h9v2h-9z"></svg:path>`,
})
export class MaterialSymbolsLineStartArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineStartArrowNotchIcon],svg[material-symbols-line-start-arrow-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19L2 12l11-7l-3.425 6H22v2H9.575z"></svg:path>`,
})
export class MaterialSymbolsLineStartArrowNotchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineStartCircleIcon],svg[material-symbols-line-start-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18q-2.5 0-4.25-1.75T2 12t1.75-4.25T8 6q2.25 0 3.913 1.425T13.925 11H22v2h-8.075q-.35 2.15-2.013 3.575T8 18"></svg:path>`,
})
export class MaterialSymbolsLineStartCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineStartDiamondIcon],svg[material-symbols-line-start-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 19l-7-7l7-7l6 6h7v2h-7z"></svg:path>`,
})
export class MaterialSymbolsLineStartDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineStartSquareIcon],svg[material-symbols-line-start-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17.5H2v-11h11V11h9v2h-9z"></svg:path>`,
})
export class MaterialSymbolsLineStartSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineStyleIcon],svg[material-symbols-line-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-2h2v2zm0-4v-2h5v2zm0-4v-2h8v2zm0-4V4h18v4zm4 12v-2h2v2zm2.5-4v-2h5v2zm1.5 4v-2h2v2zm2-8v-2h8v2zm2 8v-2h2v2zm1-4v-2h5v2zm3 4v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsLineStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineWeightIcon],svg[material-symbols-line-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-1h18v1zm0-3v-2h18v2zm0-4v-3h18v3zm0-5V4h18v4z"></svg:path>`,
})
export class MaterialSymbolsLineWeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLinearScaleIcon],svg[material-symbols-linear-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17q-1.8 0-3.175-1.137T12.1 13H6.8q-.3.675-.925 1.088T4.5 14.5q-1.05 0-1.775-.725T2 12t.725-1.775T4.5 9.5q.75 0 1.375.413T6.8 11h5.3q.35-1.725 1.725-2.863T17 7q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17m0-2q1.25 0 2.125-.875T20 12t-.875-2.125T17 9t-2.125.875T14 12t.875 2.125T17 15"></svg:path>`,
})
export class MaterialSymbolsLinearScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLinkIcon],svg[material-symbols-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"></svg:path>`,
})
export class MaterialSymbolsLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLinkOffIcon],svg[material-symbols-link-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.25 16.45l-1.5-1.55q1-.275 1.625-1.063T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12q0 1.425-.737 2.625T19.25 16.45M15.85 13l-2-2H16v2zm3.95 9.6L1.4 4.2l1.4-1.4l18.4 18.4zM11 17H7q-2.075 0-3.537-1.463T2 12q0-1.725 1.05-3.075t2.7-1.775L7.6 9H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h1.625l1.975 2z"></svg:path>`,
})
export class MaterialSymbolsLinkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLinkedCameraIcon],svg[material-symbols-linked-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.65 7q0-1.95-1.35-3.3T16 2.35V1q2.5 0 4.25 1.75T22 7zM18 7q0-.825-.587-1.412T16 5V3.65q1.375 0 2.338.975T19.35 7zm-6 10.5q1.875 0 3.188-1.312T16.5 13t-1.312-3.187T12 8.5T8.813 9.813T7.5 13t1.313 3.188T12 17.5m0-2q-1.05 0-1.775-.725T9.5 13t.725-1.775T12 10.5t1.775.725T14.5 13t-.725 1.775T12 15.5M4 21q-.825 0-1.412-.587T2 19V7q0-.825.588-1.412T4 5h3.15L9 3h6v3q.825 0 1.413.588T17 8h5v11q0 .825-.587 1.413T20 21z"></svg:path>`,
})
export class MaterialSymbolsLinkedCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLinkedServicesIcon],svg[material-symbols-linked-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9q-1.425 0-2.475-.85T15.125 6H8.85q-.275 1.05-1.037 1.813T6 8.85v6.275q1.3.35 2.15 1.4T9 19q0 1.65-1.175 2.825T5 23t-2.825-1.175T1 19q0-1.425.85-2.475t2.15-1.4V8.85q-1.3-.35-2.15-1.4T1 5q0-1.65 1.175-2.825T5 1q1.4 0 2.45.85T8.85 4h6.275q.35-1.3 1.4-2.15T19 1q1.65 0 2.825 1.175T23 5t-1.175 2.825T19 9m0 14q-1.65 0-2.825-1.175T15 19t1.175-2.825T19 15t2.825 1.175T23 19t-1.175 2.825T19 23"></svg:path>`,
})
export class MaterialSymbolsLinkedServicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLiquorIcon],svg[material-symbols-liquor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22v-2h2v-3.2q-.875-.3-1.437-1.062T3 14V6h6v8q0 .975-.562 1.738T7 16.8V20h2v2zm2-11h2V8H5zm8 11q-.825 0-1.412-.587T11 20v-9.55q0-.65.375-1.162t.975-.738l.95-.35q.35-.125.525-.362T14 7.25V3q0-.425.288-.712T15 2h3q.425 0 .713.288T19 3v4.25q0 .35.175.588t.525.362l.95.35q.6.225.975.738T22 10.45V20q0 .825-.587 1.413T20 22zm3-17h1V4h-1zm-3 7h7v-1.55l-.95-.35q-.95-.35-1.5-1.1T17 7.3V7h-1v.3q0 .95-.55 1.7t-1.5 1.1l-.95.35zm0 8h7v-2h-7z"></svg:path>`,
})
export class MaterialSymbolsLiquorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsListIcon],svg[material-symbols-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9V7h14v2zm0 4v-2h14v2zm0 4v-2h14v2zM4 9q-.425 0-.712-.288T3 8t.288-.712T4 7t.713.288T5 8t-.288.713T4 9m0 4q-.425 0-.712-.288T3 12t.288-.712T4 11t.713.288T5 12t-.288.713T4 13m0 4q-.425 0-.712-.288T3 16t.288-.712T4 15t.713.288T5 16t-.288.713T4 17"></svg:path>`,
})
export class MaterialSymbolsListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsListAltIcon],svg[material-symbols-list-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17q.425 0 .713-.288T9 16t-.288-.712T8 15t-.712.288T7 16t.288.713T8 17m0-4q.425 0 .713-.288T9 12t-.288-.712T8 11t-.712.288T7 12t.288.713T8 13m0-4q.425 0 .713-.288T9 8t-.288-.712T8 7t-.712.288T7 8t.288.713T8 9m3 8h6v-2h-6zm0-4h6v-2h-6zm0-4h6V7h-6zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsListAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsListAltAddIcon],svg[material-symbols-list-alt-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 23v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-9-6q.425 0 .713-.288T9 16t-.288-.712T8 15t-.712.288T7 16t.288.713T8 17m0-4q.425 0 .713-.288T9 12t-.288-.712T8 11t-.712.288T7 12t.288.713T8 13m0-4q.425 0 .713-.288T9 8t-.288-.712T8 7t-.712.288T7 8t.288.713T8 9m3 4h6v-2h-6zm0-4h6V7h-6zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v8.825q-.675-.4-1.437-.6t-1.563-.2q-1.325 0-2.475.525T13.55 15H11v2h1.35q-.175.475-.262.975T12 19q0 .5.075 1t.25 1z"></svg:path>`,
})
export class MaterialSymbolsListAltAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsListAltCheckIcon],svg[material-symbols-list-alt-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v7.7l-3.65 3.65l-2.125-2.125l-4.25 4.225l2.55 2.55zm6-8h6v-2h-6zm0-4h6V7h-6zm6.35 13l-3.55-3.55l1.425-1.4l2.125 2.125l4.25-4.25L23 16.35zM8 13q.425 0 .713-.288T9 12t-.288-.712T8 11t-.712.288T7 12t.288.713T8 13m0-4q.425 0 .713-.288T9 8t-.288-.712T8 7t-.712.288T7 8t.288.713T8 9"></svg:path>`,
})
export class MaterialSymbolsListAltCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsListsIcon],svg[material-symbols-lists-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-4h4v4zm6 0v-4h14v4zm-6-6v-4h4v4zm6 0v-4h14v4zM2 8V4h4v4zm6 0V4h14v4z"></svg:path>`,
})
export class MaterialSymbolsListsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLiveHelpIcon],svg[material-symbols-live-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23l-3-3H5q-.825 0-1.412-.587T3 18V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v14q0 .825-.587 1.413T19 20h-4zm-.1-6q.525 0 .888-.363t.362-.887t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362m-.9-3.85h1.85q0-.425.038-.725t.162-.575t.312-.512t.538-.588q.875-.875 1.238-1.463T15.5 7.95q0-1.325-.9-2.137T12.175 5q-1.375 0-2.337.675T8.5 7.55l1.65.65q.175-.675.7-1.087t1.225-.413q.675 0 1.125.363t.45.962q0 .425-.275.9t-.925 1.05q-.425.35-.688.688t-.437.712t-.25.788t-.075.987"></svg:path>`,
})
export class MaterialSymbolsLiveHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLiveTvIcon],svg[material-symbols-live-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.5 15.5l7-4.5l-7-4.5zM8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v2z"></svg:path>`,
})
export class MaterialSymbolsLiveTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLivingIcon],svg[material-symbols-living-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.587 1.413T20 22zm3-4h10q.825 0 1.413-.587T19 16v-3.5q0-.675-.337-1.237t-.913-.913V9q0-1.25-.875-2.125T14.75 6h-5.5Q8 6 7.125 6.875T6.25 9v1.35q-.575.35-.913.913T5 12.5V16q0 .825.588 1.413T7 18m0-1.5q-.225 0-.363-.137T6.5 16v-3.5q0-.425.288-.712T7.5 11.5t.713.288t.287.712v2h7v-2q0-.425.288-.712t.712-.288t.713.288t.287.712V16q0 .225-.137.363T17 16.5zm3-3.5v-.5q0-.975-.65-1.675t-1.6-.775V9q0-.65.425-1.075T9.25 7.5h5.5q.65 0 1.075.425T16.25 9v1.05q-.95.075-1.6.775T14 12.5v.5z"></svg:path>`,
})
export class MaterialSymbolsLivingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalActivityIcon],svg[material-symbols-local-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.2 16l2.8-2.1l2.75 2.1l-1.05-3.4l2.8-2.2h-3.4L12 7l-1.1 3.4H7.5l2.75 2.2zM4 20q-.825 0-1.412-.587T2 18v-3.375q0-.275.175-.475t.45-.25q.6-.2.988-.725T4 12t-.387-1.175t-.988-.725q-.275-.05-.45-.25T2 9.375V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v3.375q0 .275-.175.475t-.45.25q-.6.2-.987.725T20 12t.388 1.175t.987.725q.275.05.45.25t.175.475V18q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsLocalActivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalAtmIcon],svg[material-symbols-local-atm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h2v-1h1q.425 0 .713-.288T15 15v-3q0-.425-.288-.712T14 11h-3v-1h4V8h-2V7h-2v1h-1q-.425 0-.712.288T9 9v3q0 .425.288.713T10 13h3v1H9v2h2zm-7 3q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsLocalAtmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalBarIcon],svg[material-symbols-local-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21v-2h5v-5L3 5V3h18v2l-8 9v5h5v2zM7.45 7h9.1l1.8-2H5.65z"></svg:path>`,
})
export class MaterialSymbolsLocalBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalCafeIcon],svg[material-symbols-local-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21v-2h16v2zm4-4q-1.65 0-2.825-1.175T4 13V3h16q.825 0 1.413.588T22 5v3q0 .825-.587 1.413T20 10h-2v3q0 1.65-1.175 2.825T14 17zm10-9h2V5h-2z"></svg:path>`,
})
export class MaterialSymbolsLocalCafeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalCarWashIcon],svg[material-symbols-local-car-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5q-.625 0-1.062-.437T10.5 3.5q0-.525.363-1.125T12 1q.775.775 1.138 1.375T13.5 3.5q0 .625-.437 1.063T12 5M7 5q-.625 0-1.062-.437T5.5 3.5q0-.525.363-1.125T7 1q.775.775 1.138 1.375T8.5 3.5q0 .625-.437 1.063T7 5m10 0q-.625 0-1.062-.437T15.5 3.5q0-.525.363-1.125T17 1q.775.775 1.138 1.375T18.5 3.5q0 .625-.437 1.063T17 5M6 21v1q0 .425-.288.713T5 23H4q-.425 0-.712-.288T3 22v-8l2.1-6q.15-.45.538-.725T6.5 7h11q.475 0 .863.275T18.9 8l2.1 6v8q0 .425-.287.713T20 23h-1q-.425 0-.712-.288T18 22v-1zm-.2-9h12.4l-1.05-3H6.85zm1.7 6q.625 0 1.063-.437T9 16.5t-.437-1.062T7.5 15t-1.062.438T6 16.5t.438 1.063T7.5 18m9 0q.625 0 1.063-.437T18 16.5t-.437-1.062T16.5 15t-1.062.438T15 16.5t.438 1.063T16.5 18"></svg:path>`,
})
export class MaterialSymbolsLocalCarWashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalConvenienceStoreIcon],svg[material-symbols-local-convenience-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.025 18h3v-1h-2v-1h2v-3h-3v1h2v1h-2zm7 0h1v-5h-1v2h-1v-2h-1v3h2zm6-6.95V19q0 .825-.587 1.413T19.025 21h-14q-.825 0-1.412-.587T3.025 19v-7.95q-.575-.525-.887-1.35t-.013-1.8l1.05-3.4q.2-.65.713-1.075T5.075 3h13.9q.675 0 1.175.413t.725 1.087l1.05 3.4q.3.975-.012 1.775t-.888 1.375m-6.8-1.05q.675 0 1.025-.462t.275-1.038l-.55-3.5h-1.95v3.7q0 .525.35.913t.85.387m-4.5 0q.575 0 .938-.388t.362-.912V5h-1.95l-.55 3.5q-.1.6.262 1.05t.938.45m-4.45 0q.45 0 .787-.325t.413-.825L7.025 5h-1.95l-1 3.35q-.15.5.162 1.075T5.275 10m13.5 0q.725 0 1.05-.575t.15-1.075L18.925 5h-1.9l.55 3.85q.075.5.413.825t.787.325"></svg:path>`,
})
export class MaterialSymbolsLocalConvenienceStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalDiningIcon],svg[material-symbols-local-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.375 21l-1.4-1.4l10.25-10.25q-.45-1.05-.125-2.375T14.525 4.6q1.325-1.325 2.95-1.55t2.65.8t.8 2.65t-1.55 2.95q-1.05 1.1-2.375 1.425t-2.375-.125L13.375 12l7.6 7.6l-1.4 1.4l-7.6-7.55zm2.95-8.55l-3-3q-1.35-1.35-1.35-3.225T4.325 3l6.2 6.25z"></svg:path>`,
})
export class MaterialSymbolsLocalDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalDrinkIcon],svg[material-symbols-local-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.975 22q-.775 0-1.337-.513T5 20.226L3 2h18l-2 18.225q-.075.75-.638 1.263T17.026 22zM5.65 8h12.7l.4-4H5.25zM12 19q1.2 0 2.025-.825t.825-2.025q0-1.025-.663-2.225T12 11q-1.525 1.725-2.187 2.925T9.15 16.15q0 1.2.825 2.025T12 19"></svg:path>`,
})
export class MaterialSymbolsLocalDrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalFloristIcon],svg[material-symbols-local-florist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.5q1.05 0 1.775-.725T14.5 8t-.725-1.775T12 5.5t-1.775.725T9.5 8t.725 1.775T12 10.5m0 4.5q-.975 0-1.763-.537T9.1 13.05q-.125 0-.225.013t-.225.012q-1.3 0-2.225-.925T5.5 9.925q0-.525.175-1.013T6.2 8q-.325-.425-.5-.913t-.175-1.012q0-1.3.913-2.225t2.212-.925q.125 0 .225.013t.225.012q.35-.875 1.138-1.412T12 1t1.763.538T14.9 2.95q.125 0 .225-.012t.225-.013q1.3 0 2.213.925t.912 2.225q0 .525-.162 1.012T17.8 8q.325.425.5.913t.175 1.012q0 1.3-.913 2.225t-2.212.925q-.125 0-.225-.012t-.225-.013q-.35.875-1.137 1.413T12 15m0 7q0-1.85.713-3.488t1.937-2.862t2.863-1.937T21 13q0 1.85-.712 3.488T18.35 19.35t-2.863 1.938T12 22m0 0q0-1.85-.712-3.488T9.35 15.65t-2.863-1.937T3 13q0 1.85.713 3.488T5.65 19.35t2.863 1.938T12 22"></svg:path>`,
})
export class MaterialSymbolsLocalFloristIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalGasStationIcon],svg[material-symbols-local-gas-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V5q0-.825.588-1.412T6 3h6q.825 0 1.413.588T14 5v7h1q.825 0 1.413.588T17 14v4.5q0 .425.288.713T18 19.5t.713-.288T19 18.5v-7.2q-.225.125-.475.163T18 11.5q-1.05 0-1.775-.725T15.5 9q0-.8.438-1.437T17.1 6.65L15 4.55l1.05-1.05l3.7 3.6q.375.375.563.875T20.5 9v9.5q0 1.05-.725 1.775T18 21t-1.775-.725T15.5 18.5v-5H14V21zm2-11h6V5H6zm12 0q.425 0 .713-.288T19 9t-.288-.712T18 8t-.712.288T17 9t.288.713T18 10"></svg:path>`,
})
export class MaterialSymbolsLocalGasStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalHospitalIcon],svg[material-symbols-local-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17h3v-3.5H17v-3h-3.5V7h-3v3.5H7v3h3.5zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsLocalHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalLaundryServiceIcon],svg[material-symbols-local-laundry-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm6-3q2.075 0 3.538-1.463T17 14t-1.463-3.537T12 9t-3.537 1.463T7 14t1.463 3.538T12 19m0-1.7q-.65 0-1.263-.238T9.65 16.35l4.7-4.7q.475.475.713 1.088T15.3 14q0 1.375-.962 2.338T12 17.3M8 7q.425 0 .713-.288T9 6t-.288-.712T8 5t-.712.288T7 6t.288.713T8 7m3 0q.425 0 .713-.288T12 6t-.288-.712T11 5t-.712.288T10 6t.288.713T11 7"></svg:path>`,
})
export class MaterialSymbolsLocalLaundryServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalLibraryIcon],svg[material-symbols-local-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22.5q-1.8-1.7-4.125-2.6T3 19V8q2.525 0 4.85.913T12 11.55q1.825-1.725 4.15-2.637T21 8v11q-2.575 0-4.887.9T12 22.5M12 9q-1.65 0-2.825-1.175T8 5t1.175-2.825T12 1t2.825 1.175T16 5t-1.175 2.825T12 9"></svg:path>`,
})
export class MaterialSymbolsLocalLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalMallIcon],svg[material-symbols-local-mall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V8q0-.825.588-1.412T5 6h2q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6h2q.825 0 1.413.588T21 8v12q0 .825-.587 1.413T19 22zm7-8q2.075 0 3.538-1.463T17 9h-2q0 1.25-.875 2.125T12 12t-2.125-.875T9 9H7q0 2.075 1.463 3.538T12 14M9 6h6q0-1.25-.875-2.125T12 3t-2.125.875T9 6"></svg:path>`,
})
export class MaterialSymbolsLocalMallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalParkingIcon],svg[material-symbols-local-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21V3h7q2.5 0 4.25 1.75T19 9t-1.75 4.25T13 15h-3v6zm4-10h3.2q.825 0 1.413-.587T15.2 9t-.587-1.412T13.2 7H10z"></svg:path>`,
})
export class MaterialSymbolsLocalParkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalPharmacyIcon],svg[material-symbols-local-pharmacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2l2-6l-2-6V5h12.7l1.45-4l2.35.85L18.35 5H21v2l-2 6l2 6v2zm8-4h2v-3h3v-2h-3V9h-2v3H8v2h3z"></svg:path>`,
})
export class MaterialSymbolsLocalPharmacyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalPizzaIcon],svg[material-symbols-local-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22L2 7q2.125-1.8 4.663-2.9T12 3t5.338 1.088T22 7zM9.5 10q.625 0 1.063-.437T11 8.5t-.437-1.062T9.5 7t-1.062.438T8 8.5t.438 1.063T9.5 10m2.5 5q.625 0 1.063-.437T13.5 13.5t-.437-1.062T12 12t-1.062.438T10.5 13.5t.438 1.063T12 15"></svg:path>`,
})
export class MaterialSymbolsLocalPizzaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalPoliceIcon],svg[material-symbols-local-police-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.2 15.6l2.8-2.1l2.75 2.1l-1.05-3.4l2.8-2.2h-3.4L12 6.6L10.9 10H7.5l2.75 2.2zM12 22q-3.475-.875-5.737-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22"></svg:path>`,
})
export class MaterialSymbolsLocalPoliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalPostOfficeIcon],svg[material-symbols-local-post-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22q-.425 0-.712-.288T2 21v-8q0-.425.288-.712T3 12h3V8q0-2.5 1.75-4.25T12 2h4q2.5 0 4.25 1.75T22 8v14h-2v-3h-4v2q0 .425-.288.713T15 22zm6-3.4l5-2.85V14l-5 2.85L4 14v1.75zm7-1.6h4V8q0-1.65-1.175-2.825T16 4h-4q-1.65 0-2.825 1.175T8 8v4h7q.425 0 .713.288T16 13zm-6-7V8h8v2z"></svg:path>`,
})
export class MaterialSymbolsLocalPostOfficeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalSeeIcon],svg[material-symbols-local-see-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.5q-1.05 0-1.775-.725T9.5 14t.725-1.775T12 11.5h.05q.55.775 1.163 1.5t1.262 1.4q-.125.9-.825 1.5t-1.65.6M4 22q-.825 0-1.412-.587T2 20V8q0-.825.588-1.412T4 6h3.15L9 4h1.25q-.125.475-.187.975T10 6q0 .95.25 1.85t.675 1.775q-1.5.35-2.463 1.563T7.5 14q0 1.875 1.313 3.188T12 18.5q1.35 0 2.438-.712t1.637-1.863q.5.475.988.9t.937.8q1.05-.875 2.05-1.787T22 13.95V20q0 .825-.587 1.413T20 22zm14-7q3.025-2.575 4.513-4.775T24 6.15q0-2.825-1.812-4.487T18 0t-4.187 1.663T12 6.15q0 1.875 1.488 4.075T18 15m-1.85-6l.7-2.275L15 5.25h2.275L18 3l.725 2.25H21l-1.85 1.475l.7 2.275L18 7.6z"></svg:path>`,
})
export class MaterialSymbolsLocalSeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalShippingIcon],svg[material-symbols-local-shipping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-1.25 0-2.125-.875T3 17H1V6q0-.825.588-1.412T3 4h14v4h3l3 4v5h-2q0 1.25-.875 2.125T18 20t-2.125-.875T15 17H9q0 1.25-.875 2.125T6 20m0-2q.425 0 .713-.288T7 17t-.288-.712T6 16t-.712.288T5 17t.288.713T6 18m12 0q.425 0 .713-.288T19 17t-.288-.712T18 16t-.712.288T17 17t.288.713T18 18m-1-5h4.25L19 10h-2z"></svg:path>`,
})
export class MaterialSymbolsLocalShippingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalTaxiIcon],svg[material-symbols-local-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19v1q0 .425-.288.713T5 21H4q-.425 0-.712-.288T3 20v-8l2.1-6q.15-.45.538-.725T6.5 5H9V3h6v2h2.5q.475 0 .863.275T18.9 6l2.1 6v8q0 .425-.287.713T20 21h-1q-.425 0-.712-.288T18 20v-1zm-.2-9h12.4l-1.05-3H6.85zm1.7 6q.625 0 1.063-.437T9 14.5t-.437-1.062T7.5 13t-1.062.438T6 14.5t.438 1.063T7.5 16m9 0q.625 0 1.063-.437T18 14.5t-.437-1.062T16.5 13t-1.062.438T15 14.5t.438 1.063T16.5 16"></svg:path>`,
})
export class MaterialSymbolsLocalTaxiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocationAutomationIcon],svg[material-symbols-location-automation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.5 22l-1.4-3.1l-3.1-1.4l3.1-1.4l1.4-3.1l1.4 3.1l3.1 1.4l-3.1 1.4l-1.4 3.1ZM4 19V7l8-6l8 6v4.175q-.375-.1-.763-.138T18.476 11q-2.725 0-4.6 1.9T12 17.5q0 .375.038.75t.137.75H4Z"></svg:path>`,
})
export class MaterialSymbolsLocationAutomationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocationAwayIcon],svg[material-symbols-location-away-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21v-1.9q0-.525.263-.987t.712-.738q1.15-.675 2.413-1.025T16 16t2.613.35t2.412 1.025q.45.275.713.738T22 19.1V21zm-8 0V9l8-6l5.375 4.05q-1.875.225-3.125 1.638T11 12q0 .775.213 1.463t.612 1.287q-.5.2-.962.413t-.913.487q-.9.525-1.425 1.463T8 19.1V21zm14-6q-1.25 0-2.125-.875T13 12t.875-2.125T16 9t2.125.875T19 12t-.875 2.125T16 15"></svg:path>`,
})
export class MaterialSymbolsLocationAwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocationChipIcon],svg[material-symbols-location-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19q-2.925 0-4.962-2.037T1 12t2.038-4.962T8 5h8q2.925 0 4.963 2.038T23 12t-2.037 4.963T16 19zm.75-7.75q0 1.525 1.025 2.663T12 16q1.2-.95 2.225-2.087t1.025-2.663q0-1.35-.95-2.3T12 8t-2.3.95t-.95 2.3M12 12q-.425 0-.712-.288T11 11t.288-.712T12 10t.713.288T13 11t-.288.713T12 12"></svg:path>`,
})
export class MaterialSymbolsLocationChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocationCityIcon],svg[material-symbols-location-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V7h6V5l3-3l3 3v6h6v10zm2-2h2v-2H5zm0-4h2v-2H5zm0-4h2V9H5zm6 8h2v-2h-2zm0-4h2v-2h-2zm0-4h2V9h-2zm0-4h2V5h-2zm6 12h2v-2h-2zm0-4h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsLocationCityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocationDisabledIcon],svg[material-symbols-location-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.6 16.85l-1.45-1.45q.425-.75.638-1.6T19 12.05q0-2.9-2.05-4.95T12 5.05q-.9 0-1.75.213t-1.6.637L7.2 4.45q.875-.525 1.813-.875T11 3.1v-2h2v2q3.125.35 5.363 2.588t2.587 5.362h2v2h-2q-.125 1.05-.475 1.988T19.6 16.85M11 23v-2q-3.125-.35-5.363-2.588T3.05 13.05h-2v-2h2q.125-1.05.475-1.987T4.4 7.25l-3-3l1.4-1.4l18.4 18.4l-1.45 1.4l-2.95-3q-.875.525-1.812.875T13 21v2zm1-3.95q.9 0 1.75-.213t1.6-.637l-9.5-9.5q-.425.75-.638 1.6T5 12.05q0 2.9 2.05 4.95T12 19.05"></svg:path>`,
})
export class MaterialSymbolsLocationDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocationHomeIcon],svg[material-symbols-location-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m-6 4h12v-.275q0-.35-.15-.65t-.45-.475q-1.225-.775-2.587-1.187T12 16t-2.812.413T6.6 17.6q-.3.175-.45.475t-.15.65zm-2 2V9l8-6l8 6v12z"></svg:path>`,
})
export class MaterialSymbolsLocationHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocationOffIcon],svg[material-symbols-location-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.475 23.3l-4.8-4.8q-.8.85-1.7 1.725T12 22q-4.025-3.425-6.012-6.362T4 10.2q0-.8.125-1.525t.35-1.375l-3.8-3.8L2.1 2.075l19.8 19.8zM18.2 15.325L13.775 10.9q.125-.2.175-.425T14 10q0-.825-.587-1.412T12 8q-.25 0-.475.05t-.425.175L6.775 3.9Q7.85 2.975 9.2 2.488T12 2q3.175 0 5.588 2.225T20 10.2q0 1.2-.45 2.463t-1.35 2.662"></svg:path>`,
})
export class MaterialSymbolsLocationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocationOnIcon],svg[material-symbols-location-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"></svg:path>`,
})
export class MaterialSymbolsLocationOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocationSearchingIcon],svg[material-symbols-location-searching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 23v-2q-3.125-.35-5.363-2.588T3.05 13.05h-2v-2h2q.35-3.125 2.588-5.363T11 3.1v-2h2v2q3.125.35 5.363 2.588t2.587 5.362h2v2h-2q-.35 3.125-2.587 5.363T13 21v2zm1-3.95q2.9 0 4.95-2.05T19 12.05T16.95 7.1T12 5.05T7.05 7.1T5 12.05T7.05 17T12 19.05"></svg:path>`,
})
export class MaterialSymbolsLocationSearchingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLockIcon],svg[material-symbols-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"></svg:path>`,
})
export class MaterialSymbolsLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLockClockIcon],svg[material-symbols-lock-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zm9 15q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m1.65-2.65l.7-.7l-1.85-1.85V15h-1v3.2zM12.25 22H6q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v1.3q-.5-.175-1-.238T18 11q-2.925 0-4.962 2.038T11 18q0 1.075.338 2.088T12.25 22"></svg:path>`,
})
export class MaterialSymbolsLockClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLockOpenIcon],svg[material-symbols-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8h9V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6H7q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8m6 9q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17"></svg:path>`,
})
export class MaterialSymbolsLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLockOpenCircleIcon],svg[material-symbols-lock-open-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 16h5q.625 0 1.063-.437T16 14.5v-3q0-.625-.437-1.062T14.5 10V8.5q0-1.05-.725-1.775T12 6t-1.775.725T9.5 8.5H11q0-.425.288-.712T12 7.5t.713.288T13 8.5V10H9.5q-.625 0-1.062.438T8 11.5v3q0 .625.438 1.063T9.5 16m2.5 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsLockOpenCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLockOpenRightIcon],svg[material-symbols-lock-open-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17m-6 5q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h7V6q0-2.075 1.463-3.537T18 1t3.538 1.463T23 6h-2q0-1.25-.875-2.125T18 3t-2.125.875T15 6v2h3q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22z"></svg:path>`,
})
export class MaterialSymbolsLockOpenRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLockPersonIcon],svg[material-symbols-lock-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v1.3q-.45-.15-.937-.225T18 11q-2.9 0-4.95 2.05T11 18q0 1.125.325 2.1t.925 1.9zm12 1q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zm9 10q.625 0 1.063-.437T19.5 16.5t-.437-1.062T18 15t-1.062.438T16.5 16.5t.438 1.063T18 18m0 3q.75 0 1.4-.35t1.075-.975q-.575-.35-1.2-.513T18 19t-1.275.162t-1.2.513q.425.625 1.075.975T18 21"></svg:path>`,
})
export class MaterialSymbolsLockPersonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLockResetIcon],svg[material-symbols-lock-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12h2q0 1.65.625 3.113t1.713 2.55t2.55 1.725t3.112.637q3.35 0 5.675-2.325T20 12.025T17.675 6.35T12 4.025q-2.225 0-4.038 1.088T5.1 8H8v2H2V4h2v2q1.375-1.825 3.45-2.912T12 2q2.075 0 3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-2-6q-.425 0-.712-.288T9 15v-3q0-.425.288-.712T10 11v-1q0-.825.588-1.412T12 8t1.413.588T14 10v1q.425 0 .713.288T15 12v3q0 .425-.288.713T14 16zm1-5h2v-1q0-.425-.288-.712T12 9t-.712.288T11 10z"></svg:path>`,
})
export class MaterialSymbolsLockResetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLoginIcon],svg[material-symbols-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"></svg:path>`,
})
export class MaterialSymbolsLoginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLogoDevIcon],svg[material-symbols-logo-dev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15h2.4q.475 0 .813-.337t.337-.813v-3.7q0-.475-.337-.812T8.4 9H6zm1.15-1.15v-3.7H8.4v3.7zM10.875 15h2.45v-1.15h-2.05v-1.3h1.3V11.4h-1.3v-1.25h2.05V9h-2.45q-.325 0-.537.212t-.213.538v4.5q0 .325.213.538t.537.212m5.15-.025q.325 0 .563-.213t.312-.537L18.3 9h-1.2l-1.075 4.1L14.95 9h-1.2l1.4 5.225q.075.325.313.538t.562.212M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsLogoDevIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLogoutIcon],svg[material-symbols-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"></svg:path>`,
})
export class MaterialSymbolsLogoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLooksIcon],svg[material-symbols-looks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 17q0-2.275.863-4.275t2.362-3.5t3.5-2.363T12 6t4.275.863t3.5 2.362t2.363 3.5T23 17h-2q0-3.725-2.637-6.363T12 8t-6.362 2.638T3 17zm4 0q0-2.9 2.05-4.95T12 10t4.95 2.05T19 17h-2q0-2.075-1.463-3.537T12 12t-3.537 1.463T7 17z"></svg:path>`,
})
export class MaterialSymbolsLooksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLooks3Icon],svg[material-symbols-looks-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17h4q.825 0 1.413-.587T15 15v-1.5q0-.65-.425-1.075T13.5 12q.65 0 1.075-.425T15 10.5V9q0-.825-.587-1.412T13 7H9v2h4v2h-2v2h2v2H9zm-4 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsLooks3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLooks4Icon],svg[material-symbols-looks-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17h2V7h-2v4h-2V7H9v6h4zm-8 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsLooks4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLooks5Icon],svg[material-symbols-looks-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17h4q.825 0 1.413-.587T15 15v-2q0-.825-.587-1.412T13 11h-2V9h4V7H9v6h4v2H9zm-4 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsLooks5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLooks6Icon],svg[material-symbols-looks-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h2q.825 0 1.413-.587T15 15v-2q0-.825-.587-1.412T13 11h-2V9h3V7h-3q-.825 0-1.412.588T9 9v6q0 .825.588 1.413T11 17m0-4h2v2h-2zm-6 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsLooks6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLooksOneIcon],svg[material-symbols-looks-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17h2V7h-4v2h2zm-7 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsLooksOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLooksTwoIcon],svg[material-symbols-looks-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17h6v-2h-4v-2h2q.825 0 1.413-.587T15 11V9q0-.825-.587-1.412T13 7H9v2h4v2h-2q-.825 0-1.412.588T9 13zm-4 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsLooksTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLoupeIcon],svg[material-symbols-loupe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v8q0 .825-.587 1.413T20 22z"></svg:path>`,
})
export class MaterialSymbolsLoupeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLowDensityIcon],svg[material-symbols-low-density-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V11h2v8h14V5h-8V3h10v18zM3 9V7h2v2zm0-4V3h2v2zm4 8v-2h2v2zm0-8V3h2v2zm4 8v-2h2v2zm0-4V7h2v2z"></svg:path>`,
})
export class MaterialSymbolsLowDensityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLowPriorityIcon],svg[material-symbols-low-priority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.475q0 1.775 1.188 3.05T8.15 15.95L6.6 14.4L8 13l4 4l-4 4l-1.4-1.4L8.2 18q-2.625-.15-4.413-2.025T2 11.5q0-2.725 1.888-4.612T8.5 5H12v2H8.5Q6.625 7 5.313 8.3T4 11.475M14 18v-2h8v2zm0-5.5v-2h8v2zM14 7V5h8v2z"></svg:path>`,
})
export class MaterialSymbolsLowPriorityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLowercaseIcon],svg[material-symbols-lowercase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 18q-1.275 0-2.025-.687t-.75-1.813q0-1.1.863-1.812t2.212-.713q.575 0 1.125.1t.95.275v-.3q0-.725-.513-1.175T8 11.425q-.575 0-1.05.238t-.825.687l-1.175-.875q.6-.725 1.363-1.075t1.712-.35q1.725 0 2.575.813t.85 2.437v4.45H9.875v-.925h-.1q-.35.575-.95.875T7.5 18m.3-1.35q.875 0 1.488-.6t.612-1.4q-.35-.2-.837-.312t-.963-.113q-.8 0-1.25.35t-.45.925q0 .5.4.825t1 .325M17.5 18l-4-4l1.4-1.4l1.6 1.6V8h2v6.2l1.6-1.6l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsLowercaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLoyaltyIcon],svg[material-symbols-loyalty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.4 14.25l-7.15 7.15q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45l-8.825-8.825q-.275-.275-.425-.637T2 11.175V4q0-.825.588-1.412T4 2h7.175q.4 0 .775.163t.65.437l8.8 8.825q.3.3.438.675t.137.75t-.137.738t-.438.662M6.5 8q.625 0 1.063-.437T8 6.5t-.437-1.062T6.5 5t-1.062.438T5 6.5t.438 1.063T6.5 8m6.5 9.5l3.5-3.5q.275-.275.438-.65t.162-.8q0-.85-.6-1.45t-1.45-.6q-.475 0-.937.275T13 11.7q-.75-.7-1.175-.95t-.875-.25q-.85 0-1.45.6t-.6 1.45q0 .425.163.8T9.5 14z"></svg:path>`,
})
export class MaterialSymbolsLoyaltyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLteMobiledataIcon],svg[material-symbols-lte-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16V8h2v6h3v2zm7 0v-6H9V8h6v2h-2v6zm5 0V8h5v2h-3v1h3v2h-3v1h3v2z"></svg:path>`,
})
export class MaterialSymbolsLteMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLteMobiledataBadgeIcon],svg[material-symbols-lte-mobiledata-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21zm1-5h5v-2H6V8H4zm6 0h2v-6h2V8H8v2h2zm5 0h5v-2h-3v-1h2v-2h-2v-1h3V8h-5z"></svg:path>`,
})
export class MaterialSymbolsLteMobiledataBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLtePlusMobiledataIcon],svg[material-symbols-lte-plus-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 16V8h2v6h3v2zm6 0v-6H5V8h6v2H9v6zm5 0V8h5v2h-3v1h3v2h-3v1h3v2zm8-1v-2h-2v-2h2V9h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLtePlusMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLtePlusMobiledataBadgeIcon],svg[material-symbols-lte-plus-mobiledata-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16h4v-2H6V8H4zm5.5 0h2v-6H13V8H8v2h1.5zm4.5 0h4v-2h-2v-1h1.5v-2H16v-1h2V8h-4zM3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v6.25h-1.25V10h-1.5v1.25H19v1.5h1.25V14h1.5v-1.25H23V19q0 .825-.587 1.413T21 21z"></svg:path>`,
})
export class MaterialSymbolsLtePlusMobiledataBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLuggageIcon],svg[material-symbols-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V8q0-.825.588-1.412T7 6h2V4q0-.825.588-1.412T11 2h2q.825 0 1.413.588T15 4v2h2q.825 0 1.413.588T19 8v11q0 .825-.587 1.413T17 21q0 .425-.288.713T16 22t-.712-.288T15 21H9q0 .425-.288.713T8 22t-.712-.288T7 21m2-3h2V9H9zm4 0h2V9h-2zM11 6h2V4h-2z"></svg:path>`,
})
export class MaterialSymbolsLuggageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLunchDiningIcon],svg[material-symbols-lunch-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19v-3h20v3q0 .825-.587 1.413T20 21zm8-7.5q-.9 0-1.425.5t-1.925.5t-1.9-.5t-1.4-.5t-1.425.5T2 14.5v-2q.9 0 1.425-.5t1.925-.5t1.9.5t1.4.5t1.425-.5T12 11.5t1.925.5t1.425.5t1.4-.5t1.9-.5t1.975.5t1.375.5v2q-1.4 0-1.875-.5t-1.375-.5t-1.45.5t-1.95.5t-1.925-.5T12 13.5M2 10V9q0-2.875 2.713-4.437T12 3t7.288 1.563T22 9v1z"></svg:path>`,
})
export class MaterialSymbolsLunchDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLyricsIcon],svg[material-symbols-lyrics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14h4v-2H6zm13-2q-1.25 0-2.125-.875T16 9t.875-2.125T19 6q.275 0 .513.05t.487.125V1h4v2h-2v6q0 1.25-.875 2.125T19 12M6 11h7V9H6zm0-3h7V6H6zm0 10l-4 4V4q0-.825.588-1.412T4 2h11q.825 0 1.413.588T17 4v.425q-1.375.6-2.187 1.838T14 9t.813 2.738T17 13.575V16q0 .825-.587 1.413T15 18z"></svg:path>`,
})
export class MaterialSymbolsLyricsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMachineImageIcon],svg[material-symbols-machine-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10V7h2v3Zm6 6v-3h2v3Zm-6 0v-3h5v3Zm3-6V7h5v3Zm-5 8h12V5H6Zm0 4q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22h-2l-1-1H9l-1 1Z"></svg:path>`,
})
export class MaterialSymbolsMachineImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMacroAutoIcon],svg[material-symbols-macro-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15q-1.05 0-1.775-.725T9.5 12.5v-.2q-.3.225-.638.338t-.762.112q-1.05 0-1.775-.725T5.6 10.25q0-.75.4-1.35T7.05 8Q6.4 7.7 6 7.1t-.4-1.35q0-1.05.725-1.775T8.1 3.25q.425 0 .763.112T9.5 3.7v-.2q0-1.05.725-1.775T12 1t1.775.725T14.5 3.5v.2q.225-.175.488-.275t.562-.15l-1.325 3.55q-.325-.6-.912-.962T12 5.5q-1.05 0-1.775.725T9.5 8t.725 1.775T12 10.5q.325 0 .6-.075t.55-.2q.075.525.488.9t.987.375h3.45q-.325.575-.887.913t-1.288.337q-.425 0-.763-.112T14.5 12.3v.2q0 1.05-.725 1.775T12 15m2.625-5L18 1h1.6l3.425 9h-1.55l-.8-2.3h-3.7l-.8 2.3zm2.8-3.6h2.75L18.85 2.65h-.05zM12 22q0-1.85.713-3.488t1.937-2.862t2.863-1.937T21 13q0 1.85-.712 3.488T18.35 19.35t-2.863 1.938T12 22m0 0q0-1.85-.712-3.488T9.35 15.65t-2.863-1.937T3 13q0 1.85.713 3.488T5.65 19.35t2.863 1.938T12 22"></svg:path>`,
})
export class MaterialSymbolsMacroAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMacroOffIcon],svg[material-symbols-macro-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.85 17.375l-3.225-3.225q.975-.55 2.075-.85T21 13q0 1.2-.3 2.3t-.85 2.075m1.35 4.2L19.775 23l-2.625-2.625q-1.1.775-2.412 1.2T12 22q0-1.425.425-2.738t1.2-2.412L11.775 15q-.9-.075-1.625-.6T9.1 13.05q-.125 0-.225.012t-.225.013q-1.325 0-2.238-.913T5.5 9.925q0-.275.038-.525t.137-.5l-4.3-4.3L2.8 3.175zM12 1q.95 0 1.75.538T14.9 2.95q.125 0 .225-.012t.225-.013q1.3 0 2.213.925t.912 2.225q0 .525-.162 1.012T17.8 8q.325.425.5.913t.175 1.012q0 1.25-.837 2.162t-2.088.988l-2.725-2.725q.725-.275 1.2-.912T14.5 8q0-1.05-.725-1.775T12 5.5q-.8 0-1.437.475t-.913 1.2L6.375 3.9q.525-.55 1.25-.775T9.1 2.95q.35-.875 1.15-1.412T12 1m0 21q0-1.85-.712-3.488T9.35 15.65t-2.863-1.937T3 13q0 1.85.713 3.488T5.65 19.35t2.863 1.938T12 22"></svg:path>`,
})
export class MaterialSymbolsMacroOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMagicButtonIcon],svg[material-symbols-magic-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 19l-2.5-5.5L2 11l5.5-2.5L10 3l2.5 5.5L18 11l-5.5 2.5L10 19Zm8 2l-1.25-2.75L14 17l2.75-1.25L18 13l1.25 2.75L22 17l-2.75 1.25L18 21Z"></svg:path>`,
})
export class MaterialSymbolsMagicButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMagicExchangeIcon],svg[material-symbols-magic-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23q-2.8 0-5.15-1.275T3 18.325V21H1v-6h6v2H4.525q1.2 1.8 3.163 2.9T12 21q1.875 0 3.513-.713t2.85-1.924q1.212-1.213 1.925-2.85T21 12h2q0 2.275-.863 4.275t-2.362 3.5q-1.5 1.5-3.5 2.363T12 23ZM1 12q0-2.275.863-4.275t2.362-3.5q1.5-1.5 3.5-2.362T12 1q2.8 0 5.15 1.275t3.85 3.4V3h2v6h-6V7h2.475q-1.2-1.8-3.163-2.9T12 3q-1.875 0-3.513.713t-2.85 1.924Q4.426 6.85 3.714 8.488T3 12H1Zm11 5l-1.55-3.45L7 12l3.45-1.575L12 7l1.575 3.425L17 12l-3.425 1.55L12 17Z"></svg:path>`,
})
export class MaterialSymbolsMagicExchangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMagicTetherIcon],svg[material-symbols-magic-tether-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.35 15.35l-2.1-2.125q1.475-1.475 3.463-2.35T12 10q2.3 0 4.288.863t3.462 2.362l-2.1 2.125q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35ZM2.125 11.1L0 8.975q2.3-2.35 5.375-3.663T12 4q3.55 0 6.625 1.313T24 8.974L21.875 11.1q-1.925-1.925-4.45-3.013T12 7Q9.1 7 6.575 8.088T2.125 11.1ZM12 22l-1.25-2.75L8 18l2.75-1.25L12 14l1.25 2.75L16 18l-2.75 1.25L12 22Z"></svg:path>`,
})
export class MaterialSymbolsMagicTetherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMagnificationLargeIcon],svg[material-symbols-magnification-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15h12V7H5zm-1 5q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsMagnificationLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMagnificationSmallIcon],svg[material-symbols-magnification-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11h4V7H5zm-1 9q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsMagnificationSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMagnifyDockedIcon],svg[material-symbols-magnify-docked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm10-6.5h2v-2h2v-2h-2v-2h-2v2h-2v2h2zM4 15h16V6H4z"></svg:path>`,
})
export class MaterialSymbolsMagnifyDockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMagnifyFullscreenIcon],svg[material-symbols-magnify-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm10-6h2v-2h2v-2h-2V8h-2v2h-2v2h2z"></svg:path>`,
})
export class MaterialSymbolsMagnifyFullscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMailIcon],svg[material-symbols-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"></svg:path>`,
})
export class MaterialSymbolsMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMailLockIcon],svg[material-symbols-mail-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13l8-5V6l-8 5l-8-5v2zm7 7q-.425 0-.712-.288T18 19v-3q0-.425.288-.712T19 15v-1q0-.825.588-1.412T21 12t1.413.588T23 14v1q.425 0 .713.288T24 16v3q0 .425-.288.713T23 20zm1-5h2v-1q0-.425-.288-.712T21 13t-.712.288T20 14zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v4h-1q-2.075 0-3.537 1.463T16 15v5z"></svg:path>`,
})
export class MaterialSymbolsMailLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMailOffIcon],svg[material-symbols-mail-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L17.15 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4l2 2H3.15L1.375 4.225L2.8 2.8l18.4 18.4zm2-3.7l-7.4-7.4L20 8V6l-6.85 4.3L6.85 4H20q.825 0 1.413.588T22 6v12q0 .25-.05.488t-.175.437"></svg:path>`,
})
export class MaterialSymbolsMailOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMaleIcon],svg[material-symbols-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4v6h-2V7.425l-3.975 3.95q.475.7.725 1.488T15 14.5q0 2.3-1.6 3.9T9.5 20t-3.9-1.6T4 14.5t1.6-3.9T9.5 9q.825 0 1.625.237t1.475.738L16.575 6H14V4zM9.5 11q-1.45 0-2.475 1.025T6 14.5t1.025 2.475T9.5 18t2.475-1.025T13 14.5t-1.025-2.475T9.5 11"></svg:path>`,
})
export class MaterialSymbolsMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsManIcon],svg[material-symbols-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22v-7H8V9q0-.825.588-1.412T10 7h4q.825 0 1.413.588T16 9v6h-2v7zm2-16q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsManIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMan2Icon],svg[material-symbols-man-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 22v-7H8V9q0-.825.588-1.412T10 7h4q.825 0 1.413.588T16 9v6h-2.5v7zM12 6q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsMan2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMan3Icon],svg[material-symbols-man-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22.25v-7H8v-6q0-.825.588-1.412T10 7.25h4q.825 0 1.413.588T16 9.25v6h-2v7zM12 6.5L9.75 4.25L12 2l2.25 2.25z"></svg:path>`,
})
export class MaterialSymbolsMan3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMan4Icon],svg[material-symbols-man-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22L8.3 9.275q-.125-.9.475-1.588t1.5-.687h3.45q.9 0 1.5.687t.475 1.588L14 22zm2-16q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsMan4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsManageAccountsIcon],svg[material-symbols-manage-accounts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 21l-.3-1.5q-.3-.125-.562-.262T14.6 18.9l-1.45.45l-1-1.7l1.15-1q-.05-.35-.05-.65t.05-.65l-1.15-1l1-1.7l1.45.45q.275-.2.538-.337t.562-.263L16 11h2l.3 1.5q.3.125.563.275t.537.375l1.45-.5l1 1.75l-1.15 1q.05.3.05.625t-.05.625l1.15 1l-1 1.7l-1.45-.45q-.275.2-.537.338t-.563.262L18 21zM2 20v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 13h.35q.15 0 .3.05q-.725 1.8-.6 3.575T11.25 20zm15-2q.825 0 1.413-.587T19 16t-.587-1.412T17 14t-1.412.588T15 16t.588 1.413T17 18m-7-6q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12"></svg:path>`,
})
export class MaterialSymbolsManageAccountsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsManageHistoryIcon],svg[material-symbols-manage-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10V4h2v2.35q1.275-1.6 3.113-2.475T12 3q3.75 0 6.375 2.625T21 12h-2q0-2.925-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2zm.05 3H5.1q.3 2.325 1.913 3.938t3.862 1.962l1.2 2.1q-3.45 0-6.05-2.287T3.05 13m10.3 1.75L11 12.4V7h2v4.6l1.4 1.4zM17.975 24l-.3-1.5q-.3-.125-.562-.262t-.538-.338l-1.45.45l-1-1.7l1.15-1q-.05-.325-.05-.65t.05-.65l-1.15-1l1-1.7l1.45.45q.275-.2.538-.337t.562-.263l.3-1.5h2l.3 1.5q.3.125.575.288t.525.362l1.45-.5l1 1.75l-1.15 1q.05.325.05.625t-.05.625l1.15 1l-1 1.7l-1.45-.45q-.275.2-.537.338t-.563.262l-.3 1.5zm1-3q.825 0 1.413-.587T20.975 19t-.587-1.412T18.975 17t-1.412.588T16.975 19t.588 1.413t1.412.587"></svg:path>`,
})
export class MaterialSymbolsManageHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsManageSearchIcon],svg[material-symbols-manage-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19v-2h10v2zm0-5v-2h5v2zm0-5V7h5v2zm18.6 10l-3.85-3.85q-.6.425-1.312.638T14 16q-2.075 0-3.537-1.463T9 11t1.463-3.537T14 6t3.538 1.463T19 11q0 .725-.213 1.438t-.637 1.312L22 17.6zM14 14q1.25 0 2.125-.875T17 11t-.875-2.125T14 8t-2.125.875T11 11t.875 2.125T14 14"></svg:path>`,
})
export class MaterialSymbolsManageSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMangaIcon],svg[material-symbols-manga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm4.1-2H20V7.025L17 8l-3.075-1L12 9.625l-3.075 1v3.25l-1.9 2.625z"></svg:path>`,
})
export class MaterialSymbolsMangaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsManufacturingIcon],svg[material-symbols-manufacturing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.85 12l-.3-1.5q-.3-.125-.562-.262T4.45 9.9L3 10.35l-1-1.7l1.15-1Q3.1 7.325 3.1 7t.05-.65L2 5.35l1-1.7l1.45.45q.275-.2.538-.338T5.55 3.5l.3-1.5h2l.3 1.5q.3.125.563.263t.537.337l1.45-.45l1 1.7l-1.15 1q.05.325.05.65t-.05.65l1.15 1l-1 1.7l-1.45-.45q-.275.2-.537.338t-.563.262l-.3 1.5zm1-3q.825 0 1.413-.587T8.85 7t-.587-1.412T6.85 5t-1.412.588T4.85 7t.588 1.413T6.85 9m7.95 14l-.45-2.1q-.425-.15-.787-.363t-.713-.487l-2 .65l-1.4-2.4l1.6-1.4Q11 16.45 11 16t.05-.9l-1.6-1.4l1.4-2.4l2 .65q.35-.275.713-.488t.787-.362L14.8 9h2.8l.45 2.1q.425.15.788.363t.712.487l2-.65l1.4 2.4l-1.6 1.4q.05.45.05.9t-.05.9l1.6 1.4l-1.4 2.4l-2-.65q-.35.275-.712.487t-.788.363L17.6 23zm1.4-4q1.25 0 2.125-.875T19.2 16t-.875-2.125T16.2 13t-2.125.875T13.2 16t.875 2.125T16.2 19"></svg:path>`,
})
export class MaterialSymbolsManufacturingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMapIcon],svg[material-symbols-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 21l-6-2.1l-4.65 1.8q-.5.2-.925-.112T3 19.75v-14q0-.325.188-.575T3.7 4.8L9 3l6 2.1l4.65-1.8q.5-.2.925.113T21 4.25v14q0 .325-.187.575t-.513.375zm-1-2.45V6.85l-4-1.4v11.7z"></svg:path>`,
})
export class MaterialSymbolsMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMapSearchIcon],svg[material-symbols-map-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.35 20.7q-.5.2-.925-.112T3 19.75v-14q0-.325.188-.575T3.7 4.8L9 3l6 2.1l4.65-1.8q.5-.2.925.113T21 4.25v8.425q-.875-1.275-2.187-1.975T16 10q-.5 0-1 .088t-1 .262v-3.5l-4-1.4v13.075zM20.6 22l-2.55-2.55q-.45.275-.962.413T16 20q-1.65 0-2.825-1.175T12 16t1.175-2.825T16 12t2.825 1.175T20 16q0 .575-.137 1.088t-.413.962L22 20.6zM16 18q.85 0 1.413-.5T18 16q.025-.85-.562-1.425T16 14t-1.425.575T14 16t.575 1.425T16 18"></svg:path>`,
})
export class MaterialSymbolsMapSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMapsUgcIcon],svg[material-symbols-maps-ugc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 23l1.95-6.7q-.475-1.025-.712-2.1T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22q-1.125 0-2.2-.238t-2.1-.712zm10-7h2v-3h3v-2h-3V8h-2v3H8v2h3z"></svg:path>`,
})
export class MaterialSymbolsMapsUgcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarginIcon],svg[material-symbols-margin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM8 9q.425 0 .713-.288T9 8t-.288-.712T8 7t-.712.288T7 8t.288.713T8 9m4 0q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m4 0q.425 0 .713-.288T17 8t-.288-.712T16 7t-.712.288T15 8t.288.713T16 9m0 4q.425 0 .713-.288T17 12t-.288-.712T16 11t-.712.288T15 12t.288.713T16 13m-4 0q.425 0 .713-.288T13 12t-.288-.712T12 11t-.712.288T11 12t.288.713T12 13m-4 0q.425 0 .713-.288T9 12t-.288-.712T8 11t-.712.288T7 12t.288.713T8 13"></svg:path>`,
})
export class MaterialSymbolsMarginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkAsUnreadIcon],svg[material-symbols-mark-as-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.825 0-1.412-.587T2 15V7.15q0-.375.213-.737T2.8 5.85L10.5 2l7.55 3.85q.3.15.513.475T18.85 7h-2.925L10.5 4.25L4 7.475zm3 4q-.825 0-1.412-.587T5 19v-9q0-.825.588-1.412T7 8h13q.825 0 1.413.588T22 10v9q0 .825-.587 1.413T20 21zm6.5-5.65L20 12v-2l-6.5 3.35L7 10v2z"></svg:path>`,
})
export class MaterialSymbolsMarkAsUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkChatReadIcon],svg[material-symbols-mark-chat-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.35 20l-3.525-3.55l1.4-1.4l2.125 2.125l4.25-4.25L23 14.35zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v7H12v7H6z"></svg:path>`,
})
export class MaterialSymbolsMarkChatReadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkChatUnreadIcon],svg[material-symbols-mark-chat-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6q-1.25 0-2.125-.875T16 3t.875-2.125T19 0t2.125.875T22 3t-.875 2.125T19 6M2 22V4q0-.825.588-1.412T4 2h10.1q-.1.5-.1 1t.1 1q.35 1.75 1.725 2.875T19 8q.8 0 1.575-.25T22 7v9q0 .825-.587 1.413T20 18H6z"></svg:path>`,
})
export class MaterialSymbolsMarkChatUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkEmailReadIcon],svg[material-symbols-mark-email-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.95 22l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v4.35l-6.025 6.025L13.1 13.5l-4.225 4.225L11.15 20zm8-7l8-5V6l-8 5l-8-5v2z"></svg:path>`,
})
export class MaterialSymbolsMarkEmailReadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkEmailUnreadIcon],svg[material-symbols-mark-email-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8q-1.25 0-2.125-.875T16 5t.875-2.125T19 2t2.125.875T22 5t-.875 2.125T19 8M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h10.1q-.1.5-.1 1t.1 1q.175.8.575 1.488T15.65 8.7L12 11L4 6v2l8 5l5.275-3.3q.425.15.85.225T19 10q.8 0 1.575-.25T22 9v9q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsMarkEmailUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkUnreadChatAltIcon],svg[material-symbols-mark-unread-chat-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6q-1.25 0-2.125-.875T16 3t.875-2.125T19 0t2.125.875T22 3t-.875 2.125T19 6M2 22V4q0-.825.588-1.412T4 2h10.1q-.1.5-.1 1t.1 1q.125.575.35 1.075T15 6H6v2h13q.8 0 1.575-.25T22 7v9q0 .825-.587 1.413T20 18H6zm4-11h12V9H6zm0 3h8v-2H6z"></svg:path>`,
})
export class MaterialSymbolsMarkUnreadChatAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkdownIcon],svg[material-symbols-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 15l3-3l-1.05-1.075l-1.2 1.2V9h-1.5v3.125l-1.2-1.2L13 12zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.5-5H7v-4.5h1v3h1.5v-3h1V15H12v-5q0-.425-.288-.712T11 9H6.5q-.425 0-.712.288T5.5 10z"></svg:path>`,
})
export class MaterialSymbolsMarkdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkdownCopyIcon],svg[material-symbols-markdown-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm-4 4q-.825 0-1.412-.587T3 20V6h2v14h11v2zm5.25-9h1.5V8.5h1v3h1.5v-3h1V13h1.5V8q0-.425-.288-.712T15.75 7h-4.5q-.425 0-.712.288T10.25 8z"></svg:path>`,
})
export class MaterialSymbolsMarkdownCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkdownPasteIcon],svg[material-symbols-markdown-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21v-7q0-.825.588-1.412T14 12h6q.825 0 1.413.588T22 14v7h-2v-7h-2v5h-2v-5h-2v7zm-7 0q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.175q.275-.875 1.075-1.437T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5v5h-2V5h-2v3H7V5H5v14h5v2zm7-16q.425 0 .713-.288T13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5"></svg:path>`,
})
export class MaterialSymbolsMarkdownPasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkunreadMailboxIcon],svg[material-symbols-markunread-mailbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20V10q0-.825.588-1.412T4 8h2V2h8v4H8v8h2V8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22z"></svg:path>`,
})
export class MaterialSymbolsMarkunreadMailboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMaskedTransitionsIcon],svg[material-symbols-masked-transitions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22q-2.9 0-4.95-2.05T2 15t2.05-4.95T9 8t4.95 2.05T16 15t-2.05 4.95T9 22m0-2q2.075 0 3.538-1.463T14 15t-1.463-3.537T9 10t-3.537 1.463T4 15t1.463 3.538T9 20m7.95-4.3q.05-.15.05-.325V15q0-3.325-2.337-5.663T9 7h-.375q-.175 0-.325.05q.65-2.2 2.463-3.625T15 2q2.9 0 4.95 2.05T22 9q0 2.425-1.425 4.238T16.95 15.7"></svg:path>`,
})
export class MaterialSymbolsMaskedTransitionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMaskedTransitionsAddIcon],svg[material-symbols-masked-transitions-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18v-2H6v-2h2v-2h2v2h2v2h-2v2zm1 4q-2.9 0-4.95-2.05T2 15t2.05-4.95T9 8t4.95 2.05T16 15t-2.05 4.95T9 22m0-2q2.075 0 3.538-1.463T14 15t-1.463-3.537T9 10t-3.537 1.463T4 15t1.463 3.538T9 20m7.95-4.3q.05-.15.05-.325V15q0-3.325-2.337-5.663T9 7h-.375q-.175 0-.325.05q.65-2.2 2.463-3.625T15 2q2.9 0 4.95 2.05T22 9q0 2.425-1.425 4.238T16.95 15.7"></svg:path>`,
})
export class MaterialSymbolsMaskedTransitionsAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMasksIcon],svg[material-symbols-masks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18q-.95 0-1.838-.262t-1.637-.763q-1.1-.075-2.25-.475t-2.1-1.325t-1.562-2.425T2 9v-.5q0-1.05.725-1.775T4.5 6q.975 0 1.688.675T6.975 8.3q.7-.2 1.25-.5t1.125-.575q.575-.3 1.2-.512T12 6.5q.85 0 1.463.213t1.187.512q.55.275 1.113.575t1.262.5q.075-.975.788-1.638T19.5 6q1.05 0 1.775.725T22 8.5V9q0 2.25-.612 3.75t-1.563 2.425t-2.1 1.325t-2.25.475q-.75.5-1.637.763T12 18m-5.5-3.025q-.475-.75-.737-1.637T5.5 11.5v-3q0-.425-.288-.712T4.5 7.5t-.712.288T3.5 8.5V9q0 2.75.925 4.1T6.5 14.975M9 11.25q.55-.15.95-.362t.75-.413t.638-.337T12 10t.663.138t.637.337t.738.413t.962.362V10.2q-.375-.125-.65-.275l-.55-.3q-.4-.25-.813-.438T12 9t-.987.188t-.838.437l-.55.3q-.275.15-.625.275zm8.5 3.725q1.15-.525 2.075-1.875T20.5 9v-.5q0-.425-.288-.712T19.5 7.5t-.712.288t-.288.712v3q0 .95-.25 1.838t-.75 1.637"></svg:path>`,
})
export class MaterialSymbolsMasksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMatchCaseIcon],svg[material-symbols-match-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.275 17.7L7.4 6.7h1.975l4.125 11h-1.9l-.975-2.8h-4.45l-1 2.8zm3.475-4.4h3.275l-1.6-4.55h-.1zm9.875 4.65q-1.275 0-2.025-.687t-.75-1.813q0-1.1.863-1.812t2.212-.713q.575 0 1.125.1t.95.275V13q0-.725-.513-1.175t-1.362-.45q-.575 0-1.05.238t-.825.687l-1.175-.875q.6-.725 1.363-1.075T17.15 10q1.725 0 2.575.813t.85 2.437v4.45H19v-.925h-.1q-.35.575-.95.875t-1.325.3m.3-1.35q.875 0 1.488-.6t.612-1.4q-.35-.2-.837-.312t-.963-.113q-.8 0-1.25.35t-.45.925q0 .5.4.825t1 .325"></svg:path>`,
})
export class MaterialSymbolsMatchCaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMatchCaseOffIcon],svg[material-symbols-match-case-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.275 17.7L6.45 9.25L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4l-7.15-7.15l.85 2.25h-1.9l-.975-2.8h-4.45l-1 2.8zm4.45-7.175L6.75 13.3h3.275l-.25-.725zm10.9 5.25q.2-.25.3-.55t.1-.625q-.35-.2-.837-.313t-.963-.112h-.2L15.9 13.05q.25-.05.5-.088t.525-.037q.575 0 1.125.1t.95.275V13q0-.725-.513-1.175t-1.362-.45q-.575 0-1.05.238t-.825.687l-1.075-.975q.575-.675 1.313-1T17.15 10q1.725 0 2.575.813t.85 2.437v4.475z"></svg:path>`,
})
export class MaterialSymbolsMatchCaseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMatchWordIcon],svg[material-symbols-match-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19.025v-5h2v3h18v-3h2v5zM9.55 15v-.85h-.075q-.325.5-.875.788t-1.25.287q-1.225 0-1.925-.637t-.7-1.738q0-1.05.813-1.712t2.087-.663q.575 0 1.063.088t.837.287v-.35q0-.675-.462-1.075t-1.263-.4q-.525 0-.987.225t-.788.65L4.95 9.1q.475-.675 1.2-1.025t1.675-.35q1.55 0 2.375.738t.825 2.137V15zM7.9 11.65q-.8 0-1.225.313t-.425.887q0 .5.375.813t.975.312q.8 0 1.363-.562t.562-1.363q-.35-.2-.8-.3t-.825-.1M12.525 15V4.975h1.55V7.8L14 8.8h.075q.075-.125.6-.638t1.65-.512q1.6 0 2.525 1.15t.925 2.65t-.912 2.638t-2.538 1.137q-1.025 0-1.562-.45t-.688-.7H14V15zM16.1 9.05q-1 0-1.55.738T14 11.425q0 .925.55 1.65t1.55.725t1.563-.725t.562-1.65t-.562-1.65T16.1 9.05"></svg:path>`,
})
export class MaterialSymbolsMatchWordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMatterIcon],svg[material-symbols-matter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.5q-1.65 0-3.075-.612T6.4 8.2l1.8-1.075q.6.5 1.3.825t1.5.45V3.1l1-.6l1 .6v5.3q.8-.125 1.5-.45t1.3-.825L17.6 8.2q-1.1 1.075-2.525 1.688T12 10.5m-1.225 9.375l-1.85-.975q.05-.225.063-.45T9 18q0-.575-.1-1.137T8.6 15.8l-4.575 2.75L3 18v-1.175L7.55 14.1q-.5-.575-1.15-1.025T5 12.35v-2.1q2.6.675 4.3 2.813T11 18q0 .5-.05.963t-.175.912m2.45 0q-.125-.45-.175-.913T13 18q0-2.8 1.7-4.937T19 10.25v2.1q-.75.275-1.4.725T16.45 14.1L21 16.825V18l-1.025.55L15.4 15.8q-.2.5-.3 1.063T15 18q0 .225.013.45t.062.45z"></svg:path>`,
})
export class MaterialSymbolsMatterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMaximizeIcon],svg[material-symbols-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5V3h16v2z"></svg:path>`,
})
export class MaterialSymbolsMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMeasuringTapeIcon],svg[material-symbols-measuring-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-8.5q0-3.55 2.475-6.025T13.5 3t6.025 2.475T22 11.5t-2.475 6.025T13.5 20zm8.5-5q1.45 0 2.475-1.025T17 11.5t-1.025-2.475T13.5 8t-2.475 1.025T10 11.5t1.025 2.475T13.5 15m0-2q-.625 0-1.062-.437T12 11.5t.438-1.062T13.5 10t1.063.438T15 11.5t-.437 1.063T13.5 13M2 20v-5h2v5z"></svg:path>`,
})
export class MaterialSymbolsMeasuringTapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMediaBluetoothOffIcon],svg[material-symbols-media-bluetooth-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.8 22.6l-4-4l-.6.6l-.85-.85l.6-.6L11 13.8V17q0 1.65-1.175 2.825T7 21t-2.825-1.175T3 17t1.175-2.825T7 13q.575 0 1.062.138T9 13.55V11.8L1.4 4.2l1.4-1.4l18.4 18.4zm1.4-4.25l-6.8-6.75l.8-.8l2.75 2.75V9h.6L22 12.4L19.4 15l2.6 2.55zm-2.05-4.8l1.15-1.15l-1.15-1.1zM11 8.15l-2-2V3h6v4h-4z"></svg:path>`,
})
export class MaterialSymbolsMediaBluetoothOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMediaBluetoothOnIcon],svg[material-symbols-media-bluetooth-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21q-1.65 0-2.825-1.175T3 17t1.175-2.825T7 13q.575 0 1.063.138T9 13.55V3h6v4h-4v10q0 1.65-1.175 2.825T7 21m10 0v-4.55l-2.75 2.75l-.85-.85L16.75 15l-3.4-3.35l.85-.85l2.75 2.75V9h.6L21 12.45L18.4 15l2.6 2.55L17.6 21zm1.15-2.3l1.15-1.15l-1.15-1.1zm0-5.15l1.15-1.1l-1.15-1.15z"></svg:path>`,
})
export class MaterialSymbolsMediaBluetoothOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMediaLinkIcon],svg[material-symbols-media-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 19.5l4-2.5l-4-2.5zM13 7.75h4v-1.5h-4zM3 23q-.825 0-1.412-.587T1 21v-8q0-.825.588-1.412T3 11h12q.825 0 1.413.588T17 13v8q0 .825-.587 1.413T15 23zm15.5-9v-1q0-.95-.462-1.75T16.8 10h.2q1.25 0 2.125-.875T20 7t-.875-2.125T17 4h-1.25v1.5H17q.625 0 1.063.438T18.5 7t-.437 1.063T17 8.5h-1.25V10q-.2 0-.375-.25T15 9.5h-.75v-1H13q-.625 0-1.062-.437T11.5 7t.438-1.062T13 5.5h1.25V4H13q-1.25 0-2.125.875T10 7q0 .8.375 1.438T11.35 9.5H7V3q0-.825.588-1.412T9 1h12q.825 0 1.413.588T23 3v9q0 .825-.587 1.413T21 14z"></svg:path>`,
})
export class MaterialSymbolsMediaLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMediaOutputIcon],svg[material-symbols-media-output-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 8.5q.625 0 1.063-.437T10 7t-.437-1.062T8.5 5.5t-1.062.438T7 7t.438 1.063T8.5 8.5M14 22h-2q-.825 0-1.412-.587T10 20v-4q0-2.5 1.75-4.25T16 10t4.25 1.75T22 16v4q0 .825-.587 1.413T20 22h-2v-5h2.5v-1q0-1.875-1.312-3.187T16 11.5t-3.187 1.313T11.5 16v1H14zm-6-2H4q-.825 0-1.412-.587T2 18V4q0-.825.588-1.412T4 2h9q.825 0 1.413.588T15 4v4.05q-1.425.175-2.637.8t-2.138 1.6q-.375-.225-.812-.337T8.5 10q-1.45 0-2.475 1.025T5 13.5q0 1.35.863 2.313T8 16.975zm.5-8q.125 0 .25.025T9 12.1q-.35.65-.587 1.35t-.338 1.475Q7.6 14.8 7.3 14.4t-.3-.9q0-.625.438-1.062T8.5 12"></svg:path>`,
})
export class MaterialSymbolsMediaOutputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
