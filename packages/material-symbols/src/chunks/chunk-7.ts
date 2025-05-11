import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVerticalAlignCenterIcon],svg[material-symbols-vertical-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22v-4.2l-1.6 1.6L8 18l4-4l4 4l-1.4 1.4l-1.6-1.6V22zm-7-9v-2h16v2zm8-3L8 6l1.4-1.4L11 6.2V2h2v4.2l1.6-1.6L16 6z"></svg:path>`,
})
export class MaterialSymbolsVerticalAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVerticalAlignTopIcon],svg[material-symbols-vertical-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5V3h16v2zm7 16V10.8l-2.6 2.6L7 12l5-5l5 5l-1.4 1.4l-2.6-2.6V21z"></svg:path>`,
})
export class MaterialSymbolsVerticalAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVerticalDistributeIcon],svg[material-symbols-vertical-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-2h20v2zm5-8.5v-3h10v3zM2 4V2h20v2z"></svg:path>`,
})
export class MaterialSymbolsVerticalDistributeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVerticalShadesIcon],svg[material-symbols-vertical-shades-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-2h2V3h16v16h2v2zm8-2h4V5h-4z"></svg:path>`,
})
export class MaterialSymbolsVerticalShadesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVerticalShadesClosedIcon],svg[material-symbols-vertical-shades-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-2h2V3h16v16h2v2zm4-2h1.5V5H6zm3.5 0H11V5H9.5zm3.5 0h1.5V5H13zm3.5 0H18V5h-1.5z"></svg:path>`,
})
export class MaterialSymbolsVerticalShadesClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVerticalSplitIcon],svg[material-symbols-vertical-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15v-2h8v2zm0 4v-2h8v2zm0-8V9h8v2zm0-4V5h8v2zm12 12q-.825 0-1.412-.587T13 17V7q0-.825.588-1.412T15 5h4q.825 0 1.413.588T21 7v10q0 .825-.587 1.413T19 19z"></svg:path>`,
})
export class MaterialSymbolsVerticalSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVibrationIcon],svg[material-symbols-vibration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 15V9h2v6zm3 2V7h2v10zm19-2V9h2v6zm-3 2V7h2v10zM8 21q-.825 0-1.412-.587T6 19V5q0-.825.588-1.412T8 3h8q.825 0 1.413.588T18 5v14q0 .825-.587 1.413T16 21z"></svg:path>`,
})
export class MaterialSymbolsVibrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoAudioCallIcon],svg[material-symbols-video-audio-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16q-.825 0-1.412-.588Q4 14.825 4 14v-4q0-.825.588-1.413Q5.175 8 6 8t1.412.587Q8 9.175 8 10v4q0 .825-.588 1.412Q6.825 16 6 16Zm12 0q-.825 0-1.413-.588Q16 14.825 16 14v-4q0-.825.587-1.413Q17.175 8 18 8q.825 0 1.413.587Q20 9.175 20 10v4q0 .825-.587 1.412Q18.825 16 18 16Zm-6 4q-.825 0-1.412-.587Q10 18.825 10 18V6q0-.825.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6v12q0 .825-.587 1.413Q12.825 20 12 20Z"></svg:path>`,
})
export class MaterialSymbolsVideoAudioCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoCallIcon],svg[material-symbols-video-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h2v-3h3v-2h-3V8H9v3H6v2h3zm-5 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20z"></svg:path>`,
})
export class MaterialSymbolsVideoCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoCameraBackIcon],svg[material-symbols-video-camera-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16h10l-3.45-4.5l-2.3 3l-1.55-2zm-1 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20z"></svg:path>`,
})
export class MaterialSymbolsVideoCameraBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoCameraBackAddIcon],svg[material-symbols-video-camera-back-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18v-7q.65.5 1.425.75T5 12q2.075 0 3.538-1.463T10 7q0-.8-.25-1.575T9 4h7q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20zm0-10V8H2V6h2V4h2v2h2v2H6v2zm1 6h10l-3.375-4.5L9 15l-1.625-2.175z"></svg:path>`,
})
export class MaterialSymbolsVideoCameraBackAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoCameraFrontIcon],svg[material-symbols-video-camera-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h8v-.55q0-1.1-1.1-1.775T10 13t-2.9.675T6 15.45zm4-4q.825 0 1.413-.587T12 10t-.587-1.412T10 8t-1.412.588T8 10t.588 1.413T10 12m-6 8q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20z"></svg:path>`,
})
export class MaterialSymbolsVideoCameraFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoCameraFrontOffIcon],svg[material-symbols-video-camera-front-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 17.5l-4-4v1.675L6.825 4H16q.825 0 1.413.588T18 6v4.5l4-4zm-1.45 5.85L.65 3.45l1.4-1.4l19.9 19.9zM4 4l14 14q0 .825-.587 1.413T16 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4m2 12h8v-.55q0-1.1-1.1-1.775T10 13t-2.9.675T6 15.45z"></svg:path>`,
})
export class MaterialSymbolsVideoCameraFrontOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoChatIcon],svg[material-symbols-video-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14h6q.425 0 .713-.288T15 13v-2l2 2V7l-2 2V7q0-.425-.288-.712T14 6H8q-.425 0-.712.288T7 7v6q0 .425.288.713T8 14m-6 8V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6z"></svg:path>`,
})
export class MaterialSymbolsVideoChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoFileIcon],svg[material-symbols-video-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h4q.425 0 .713-.288T14 17v-1l2 1.05v-4.1L14 14v-1q0-.425-.288-.712T13 12H9q-.425 0-.712.288T8 13v4q0 .425.288.713T9 18m-3 4q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"></svg:path>`,
})
export class MaterialSymbolsVideoFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoLabelIcon],svg[material-symbols-video-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-5h16V6H4z"></svg:path>`,
})
export class MaterialSymbolsVideoLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoLibraryIcon],svg[material-symbols-video-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 14.5l7-4.5l-7-4.5zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"></svg:path>`,
})
export class MaterialSymbolsVideoLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoSearchIcon],svg[material-symbols-video-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14M8 12V7l4 2.5z"></svg:path>`,
})
export class MaterialSymbolsVideoSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoSettingsIcon],svg[material-symbols-video-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v5h-2V6H4v12h8zm-2.5-3.5v-9l7 4.5zm8.35 6.5l-.3-1.5q-.3-.125-.562-.262t-.538-.338l-1.45.45l-1-1.7l1.15-1q-.05-.35-.05-.65t.05-.65l-1.15-1l1-1.7l1.45.45q.275-.2.538-.337t.562-.263l.3-1.5h2l.3 1.5q.3.125.563.275t.537.375l1.45-.5l1 1.75l-1.15 1q.05.3.05.625t-.05.625l1.15 1l-1 1.7l-1.45-.45q-.275.2-.537.338t-.563.262l-.3 1.5zm1-3q.825 0 1.413-.587T20.85 18t-.587-1.412T18.85 16t-1.412.588T16.85 18t.588 1.413T18.85 20"></svg:path>`,
})
export class MaterialSymbolsVideoSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoStableIcon],svg[material-symbols-video-stable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm12.975-2l2.3-8.65L7.075 6l-2.3 8.65z"></svg:path>`,
})
export class MaterialSymbolsVideoStableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideocamIcon],svg[material-symbols-videocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20z"></svg:path>`,
})
export class MaterialSymbolsVideocamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideocamAlertIcon],svg[material-symbols-videocam-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.675 20q.625-.875.95-1.9t.325-2.125q0-2.9-2.037-4.937T5.975 9Q4.9 9 3.888 9.313T2 10.225V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20zM6 21q-2.075 0-3.537-1.463T1 16t1.463-3.537T6 11t3.538 1.463T11 16t-1.463 3.538T6 21m-.5-4h1v-4h-1zm.5 2q.2 0 .35-.15t.15-.35t-.15-.35T6 18t-.35.15t-.15.35t.15.35T6 19"></svg:path>`,
})
export class MaterialSymbolsVideocamAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideocamOffIcon],svg[material-symbols-videocam-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 17.5l-4-4v1.675L6.825 4H16q.825 0 1.413.588T18 6v4.5l4-4zm-1.45 5.85L.65 3.45l1.4-1.4l19.9 19.9zM4 4l14 14q0 .825-.587 1.413T16 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4"></svg:path>`,
})
export class MaterialSymbolsVideocamOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideogameAssetIcon],svg[material-symbols-videogame-asset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18q-.825 0-1.412-.587T2 16V8q0-.825.588-1.412T4 6h16q.825 0 1.413.588T22 8v8q0 .825-.587 1.413T20 18zm3-3h2v-2h2v-2H9V9H7v2H5v2h2zm7.5 0q.625 0 1.063-.437T16 13.5t-.437-1.062T14.5 12t-1.062.438T13 13.5t.438 1.063T14.5 15m3-3q.625 0 1.063-.437T19 10.5t-.437-1.062T17.5 9t-1.062.438T16 10.5t.438 1.063T17.5 12"></svg:path>`,
})
export class MaterialSymbolsVideogameAssetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideogameAssetOffIcon],svg[material-symbols-videogame-asset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18q-.825 0-1.412-.587T2 16V8q0-.85.6-1.437t1.45-.588h1.925L15 15h-2.85L1.375 4.225L2.8 2.8l18.4 18.4l-1.425 1.425L15.15 18zM8.85 6H20q.825 0 1.413.588T22 8v8q0 .65-.35 1.15t-.925.725zm8.65 3q-.625 0-1.062.438T16 10.5t.438 1.063T17.5 12t1.063-.437T19 10.5t-.437-1.062T17.5 9M7 15h2v-2h2v-2H9V9H7v2H5v2h2z"></svg:path>`,
})
export class MaterialSymbolsVideogameAssetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewAppsIcon],svg[material-symbols-view-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20V4l6 1v14zm8-1V5h6v14zm14 1l-6-1V5l6-1zM3 17.625l2-.325V6.7l-2-.35zM11 17h2V7h-2zm10 .65V6.35l-2 .35v10.6zm-18-.025V6.35l2 .35v10.6zM11 17V7h2v10zm10 .65l-2-.35V6.7l2-.35z"></svg:path>`,
})
export class MaterialSymbolsViewAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewArrayIcon],svg[material-symbols-view-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17.5v-11q0-.625.438-1.062T4.5 5t1.063.438T6 6.5v11q0 .625-.437 1.063T4.5 19t-1.062-.437T3 17.5M8.5 19q-.625 0-1.062-.437T7 17.5v-11q0-.625.438-1.062T8.5 5h7q.625 0 1.063.438T17 6.5v11q0 .625-.437 1.063T15.5 19zm9.5-1.5v-11q0-.625.438-1.062T19.5 5t1.063.438T21 6.5v11q0 .625-.437 1.063T19.5 19t-1.062-.437T18 17.5"></svg:path>`,
})
export class MaterialSymbolsViewArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewCarouselIcon],svg[material-symbols-view-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15V9q0-.825.588-1.412T4 7t1.413.588T6 9v6q0 .825-.587 1.413T4 17t-1.412-.587T2 15m7 4q-.825 0-1.412-.587T7 17V7q0-.825.588-1.412T9 5h6q.825 0 1.413.588T17 7v10q0 .825-.587 1.413T15 19zm9-4V9q0-.825.588-1.412T20 7t1.413.588T22 9v6q0 .825-.587 1.413T20 17t-1.412-.587T18 15"></svg:path>`,
})
export class MaterialSymbolsViewCarouselIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewColumnIcon],svg[material-symbols-view-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19q-.825 0-1.412-.587T3 17V7q0-.825.588-1.412T5 5h1.325q.825 0 1.413.588T8.325 7v10q0 .825-.587 1.413T6.325 19zm6.325 0q-.825 0-1.412-.587T9.325 17V7q0-.825.588-1.412T11.325 5h1.325q.825 0 1.413.588T14.65 7v10q0 .825-.587 1.413T12.65 19zm6.325 0q-.825 0-1.412-.587T15.65 17V7q0-.825.588-1.412T17.65 5h1.325q.825 0 1.413.588T20.975 7v10q0 .825-.587 1.413T18.975 19z"></svg:path>`,
})
export class MaterialSymbolsViewColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewColumn2Icon],svg[material-symbols-view-column-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21q-.825 0-1.412-.587T13 19V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21z"></svg:path>`,
})
export class MaterialSymbolsViewColumn2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewComfyIcon],svg[material-symbols-view-comfy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11V4h20v7zm8 9v-7h12v7zm-8 0v-7h6v7z"></svg:path>`,
})
export class MaterialSymbolsViewComfyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewComfyAltIcon],svg[material-symbols-view-comfy-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10V2h8v8zm0 12v-8h8v8zm12-12V2h8v8zm0 12v-8h8v8z"></svg:path>`,
})
export class MaterialSymbolsViewComfyAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewCompactIcon],svg[material-symbols-view-compact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19.75V4.25zm-20-11v-4.5h4.25v4.5zm5.25 0v-4.5h4.25v4.5zm5.25 0v-4.5h4.25v4.5zm5.25 0v-4.5H22v4.5zm0 5.5v-4.5H22v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5zm15.75 5.5v-4.5H22v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5z"></svg:path>`,
})
export class MaterialSymbolsViewCompactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewCompactAltIcon],svg[material-symbols-view-compact-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 16.5h4v-4h-4zm0-5h4v-4h-4zm5 5h4v-4h-4zm0-5h4v-4h-4zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsViewCompactAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewCozyIcon],svg[material-symbols-view-cozy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10.5q-.825 0-1.412-.587T3 8.5V5q0-.825.588-1.412T5 3h3.5q.825 0 1.413.588T10.5 5v3.5q0 .825-.587 1.413T8.5 10.5zM5 21q-.825 0-1.412-.587T3 19v-3.5q0-.825.588-1.412T5 13.5h3.5q.825 0 1.413.588T10.5 15.5V19q0 .825-.587 1.413T8.5 21zm10.5-10.5q-.825 0-1.412-.587T13.5 8.5V5q0-.825.588-1.412T15.5 3H19q.825 0 1.413.588T21 5v3.5q0 .825-.587 1.413T19 10.5zm0 10.5q-.825 0-1.412-.587T13.5 19v-3.5q0-.825.588-1.412T15.5 13.5H19q.825 0 1.413.588T21 15.5V19q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsViewCozyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewDayIcon],svg[material-symbols-view-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-2h18v2zM3 6V4h18v2zm2 10q-.825 0-1.412-.587T3 14v-4q0-.825.588-1.412T5 8h14q.825 0 1.413.588T21 10v4q0 .825-.587 1.413T19 16z"></svg:path>`,
})
export class MaterialSymbolsViewDayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewHeadlineIcon],svg[material-symbols-view-headline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15v-2h16v2zm0 4v-2h16v2zm0-8V9h16v2zm0-4V5h16v2z"></svg:path>`,
})
export class MaterialSymbolsViewHeadlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewInArIcon],svg[material-symbols-view-in-ar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19.475L6 16.6q-.475-.275-.737-.737T5 14.875v-5.75q0-.525.263-.987T6 7.4l5-2.875q.475-.275 1-.275t1 .275L18 7.4q.475.275.738.738t.262.987v5.75q0 .525-.262.988T18 16.6l-5 2.875q-.475.275-1 .275t-1-.275M2 7V4q0-.825.588-1.412T4 2h3v2H4v3zm5 15H4q-.825 0-1.412-.587T2 20v-3h2v3h3zm10 0v-2h3v-3h2v3q0 .825-.587 1.413T20 22zm3-15V4h-3V2h3q.825 0 1.413.588T22 4v3zM8.05 8.525l-1.05.6v1.125l4 2.325v4.6l1 .575l1-.575v-4.6l4-2.325V9.125l-1.05-.6L12 10.85z"></svg:path>`,
})
export class MaterialSymbolsViewInArIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewInArOffIcon],svg[material-symbols-view-in-ar-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.525 11.675L17 10.25V9.125l-1.05-.6l-2.875 1.7l.725.725zM12 17.75l1-.575V13L9.2 9.2l-1.15-.675l-1.05.6v1.125l4 2.325v4.6zm6.725-1.875L8.7 5.85L11 4.525q.475-.275 1-.275t1 .275L18 7.4q.475.275.738.738t.262.987v5.75q0 .275-.075.525t-.2.475M11 19.475L6 16.6q-.475-.275-.737-.737T5 14.875v-5.75q0-.525.263-.987T6 7.4l.9-.5L12 12l5.1 5.1l-4.1 2.375q-.475.275-1 .275t-1-.275m9.45 3.825l-1.3-1.3H17v-2h.35v.2L3.65 6.5H4V7H2V4.85L.65 3.5l1.425-1.425l19.8 19.8zM22 17v2.15l-2-2V17zM7 2v2h-.15l-2-2zm0 20H4q-.825 0-1.412-.587T2 20v-3h2v3h3zM20 7V4h-3V2h3q.825 0 1.413.588T22 4v3z"></svg:path>`,
})
export class MaterialSymbolsViewInArOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewKanbanIcon],svg[material-symbols-view-kanban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h2V7H7zm8-2h2V7h-2zm-4-3h2V7h-2z"></svg:path>`,
})
export class MaterialSymbolsViewKanbanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewListIcon],svg[material-symbols-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20h11q.825 0 1.413-.587T22 18v-2H9zM2 8h5V4H4q-.825 0-1.412.588T2 6zm0 6h5v-4H2zm2 6h3v-4H2v2q0 .825.588 1.413T4 20m5-6h13v-4H9zm0-6h13V6q0-.825-.587-1.412T20 4H9z"></svg:path>`,
})
export class MaterialSymbolsViewListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewModuleIcon],svg[material-symbols-view-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.675 11.5q-.825 0-1.412-.587T15.675 9.5V7q0-.825.588-1.412T17.675 5H19q.825 0 1.413.588T21 7v2.5q0 .825-.587 1.413T19 11.5zm-6.325 0q-.825 0-1.412-.587T9.35 9.5V7q0-.825.588-1.412T11.35 5h1.325q.825 0 1.413.588T14.675 7v2.5q0 .825-.587 1.413t-1.413.587zm-6.325 0q-.825 0-1.412-.587T3.025 9.5V7q0-.825.588-1.412T5.025 5H6.35q.825 0 1.413.588T8.35 7v2.5q0 .825-.587 1.413T6.35 11.5zm0 7.5q-.825 0-1.412-.587T3.025 17v-2.5q0-.825.588-1.412t1.412-.588H6.35q.825 0 1.413.588T8.35 14.5V17q0 .825-.587 1.413T6.35 19zm6.325 0q-.825 0-1.412-.587T9.35 17v-2.5q0-.825.588-1.412t1.412-.588h1.325q.825 0 1.413.588t.587 1.412V17q0 .825-.587 1.413T12.675 19zm6.325 0q-.825 0-1.412-.587T15.675 17v-2.5q0-.825.588-1.412t1.412-.588H19q.825 0 1.413.588T21 14.5V17q0 .825-.587 1.413T19 19z"></svg:path>`,
})
export class MaterialSymbolsViewModuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewObjectTrackIcon],svg[material-symbols-view-object-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 20q-1.45 0-2.475-1.025T4 16.5t1.025-2.475T7.5 13h11q1.45 0 2.475 1.025T22 16.5t-1.025 2.475T18.5 20zm-2-9q-1.45 0-2.475-1.025T2 7.5t1.025-2.475T5.5 4h11q1.45 0 2.475 1.025T20 7.5t-1.025 2.475T16.5 11z"></svg:path>`,
})
export class MaterialSymbolsViewObjectTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewQuiltIcon],svg[material-symbols-view-quilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.325 11.5q-.825 0-1.412-.587T9.325 9.5V7q0-.825.588-1.412T11.325 5H19q.825 0 1.413.588T21 7v2.5q0 .825-.587 1.413T19 11.5zm6.35 7.5q-.825 0-1.412-.587T15.675 17v-2.5q0-.825.588-1.412t1.412-.588H19q.825 0 1.413.588T21 14.5V17q0 .825-.587 1.413T19 19zm-6.35 0q-.825 0-1.412-.587T9.325 17v-2.5q0-.825.588-1.412t1.412-.588h1.35q.825 0 1.413.588t.587 1.412V17q0 .825-.587 1.413T12.675 19zM5 19q-.825 0-1.413-.587T3 17V7q0-.825.588-1.412T5 5h1.325q.825 0 1.413.588T8.325 7v10q0 .825-.587 1.413T6.325 19z"></svg:path>`,
})
export class MaterialSymbolsViewQuiltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewRealSizeIcon],svg[material-symbols-view-real-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17V9H5V7h4v10zm4 0v-2h2v2zm5 0V9h-2V7h4v10zm-5-4v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsViewRealSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewSidebarIcon],svg[material-symbols-view-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 8q-.625 0-1.062-.437T18 6.5v-1q0-.625.438-1.062T19.5 4h1q.625 0 1.063.438T22 5.5v1q0 .625-.437 1.063T20.5 8zm0 6q-.625 0-1.062-.437T18 12.5v-1q0-.625.438-1.062T19.5 10h1q.625 0 1.063.438T22 11.5v1q0 .625-.437 1.063T20.5 14zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h10q.825 0 1.413.588T16 6v12q0 .825-.587 1.413T14 20zm15.5 0q-.625 0-1.062-.437T18 18.5v-1q0-.625.438-1.062T19.5 16h1q.625 0 1.063.438T22 17.5v1q0 .625-.437 1.063T20.5 20z"></svg:path>`,
})
export class MaterialSymbolsViewSidebarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewStreamIcon],svg[material-symbols-view-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-6h18v6zm0-8V5h18v6z"></svg:path>`,
})
export class MaterialSymbolsViewStreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewTimelineIcon],svg[material-symbols-view-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17h6v-2H6zm3-4h6v-2H9zm3-4h6V7h-6zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsViewTimelineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewWeekIcon],svg[material-symbols-view-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h1.325q.825 0 1.413.588T7.325 6v12q0 .825-.587 1.413T5.325 20zm7.35 0q-.825 0-1.412-.587T9.35 18V6q0-.825.588-1.412T11.35 4h1.325q.825 0 1.413.588T14.675 6v12q0 .825-.587 1.413T12.675 20zm7.325 0q-.825 0-1.412-.587T16.675 18V6q0-.825.588-1.412T18.675 4H20q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsViewWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVignetteIcon],svg[material-symbols-vignette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-4q2.45 0 4.225-1.187T18 12t-1.775-2.812T12 8T7.775 9.188T6 12t1.775 2.813T12 16"></svg:path>`,
})
export class MaterialSymbolsVignetteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVillaIcon],svg[material-symbols-villa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21v-9h8q0-.825.588-1.412T19 10t1.413.588T21 12v9h-5v-5h-2v5zm-6 0V8l13-5v7H7v11z"></svg:path>`,
})
export class MaterialSymbolsVillaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVisibilityIcon],svg[material-symbols-visibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4t6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19"></svg:path>`,
})
export class MaterialSymbolsVisibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVisibilityLockIcon],svg[material-symbols-visibility-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14.2q-1.125 0-1.912-.787T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4q3.525 0 6.438 1.9T22.8 11H19q-.7 0-1.325.175t-1.175.5V11.5q0-1.875-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16q.55 0 1.063-.125t.962-.35q-.025.125-.025.238v3.062q-.5.075-1 .125T12 19m5 2q-.425 0-.712-.288T16 20v-3q0-.425.288-.712T17 16v-1q0-.825.588-1.412T19 13t1.413.588T21 15v1q.425 0 .713.288T22 17v3q0 .425-.288.713T21 21zm1-5h2v-1q0-.425-.288-.712T19 14t-.712.288T18 15z"></svg:path>`,
})
export class MaterialSymbolsVisibilityLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVisibilityOffIcon],svg[material-symbols-visibility-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.8 22.6l-4.2-4.15q-.875.275-1.762.413T12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.463T4.15 7L1.4 4.2l1.4-1.4l18.4 18.4zM12 16q.275 0 .513-.025t.512-.1l-5.4-5.4q-.075.275-.1.513T7.5 11.5q0 1.875 1.313 3.188T12 16m7.3.45l-3.175-3.15q.175-.425.275-.862t.1-.938q0-1.875-1.312-3.187T12 7q-.5 0-.937.1t-.863.3L7.65 4.85q1.025-.425 2.1-.637T12 4q3.775 0 6.725 2.088T23 11.5q-.575 1.475-1.513 2.738T19.3 16.45m-4.625-4.6l-3-3q.7-.125 1.288.113t1.012.687t.613 1.038t.087 1.162"></svg:path>`,
})
export class MaterialSymbolsVisibilityOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVitalSignsIcon],svg[material-symbols-vital-signs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20q-.475 0-.85-.275t-.55-.7L5.3 13H1v-2h5.7L9 17.1l4.6-12.125q.175-.425.55-.7T15 4t.85.275t.55.7L18.7 11H23v2h-5.7L15 6.9l-4.6 12.125q-.175.425-.55.7T9 20"></svg:path>`,
})
export class MaterialSymbolsVitalSignsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVo2MaxIcon],svg[material-symbols-vo2-max-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20q-.425 0-.712-.288T13 19v-4q0-.425.288-.712T14 14h2.5q.425 0 .713.288T17.5 15v4q0 .425-.288.713T16.5 20zm.5-1.5H16v-3h-1.5zm4 3.5v-2.75q0-.425.288-.712t.712-.288h2v-.75h-3V16H22q.425 0 .713.288T23 17v1.75q0 .425-.288.713T22 19.75h-2v.75h3V22zm-14-2q-1.475 0-2.488-1.05T1 16.4v-4.45q0-1.175.5-2.2T2.925 8L7.25 4.6q.35-.275.55-.687T8 3.05V1h2v2.05q0 .45.2.863t.575.687L15.1 8q.9.725 1.4 1.75t.5 2.2V13h-3q-.825 0-1.412.588T12 15v4.65q-.95-.45-1.487-1.287T10 16.4V6.55l-1-.8l-1 .8v9.85q.025 1.5-1 2.55T4.5 20"></svg:path>`,
})
export class MaterialSymbolsVo2MaxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVoiceChatIcon],svg[material-symbols-voice-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11h1.5V9H6zm2.5 2H10V7H8.5zm2.75 2h1.5V5h-1.5zM14 13h1.5V7H14zm2.5-2H18V9h-1.5zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6z"></svg:path>`,
})
export class MaterialSymbolsVoiceChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVoiceOverOffIcon],svg[material-symbols-voice-over-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.85 10.1L8 5.2q.225-.075.475-.137T9 5q1.65 0 2.825 1.175T13 9q0 .275-.038.55t-.112.55M1 21v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T9 14q.65 0 1.238.063t1.162.137L10 12.85q-.225.075-.475.113T9 13q-1.65 0-2.825-1.175T5 9q0-.275.038-.525T5.15 8L1.4 4.2l1.4-1.4l18.25 18.5l-1.35 1.45L17 20v1zm18.95-5.05L18.4 14.4q1.1-1.025 1.725-2.425T20.75 9t-.625-2.95t-1.725-2.4l1.55-1.6q1.4 1.325 2.225 3.125T23 9t-.825 3.825t-2.225 3.125m-3.2-3.2l-1.6-1.6q.45-.425.725-.962T16.15 9t-.275-1.187t-.725-.963l1.6-1.6q.8.725 1.25 1.688T18.45 9T18 11.063t-1.25 1.687"></svg:path>`,
})
export class MaterialSymbolsVoiceOverOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVoiceSelectionIcon],svg[material-symbols-voice-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-2q1.15 0 2.275-.15t2.2-.55q-1.15-.575-1.812-1.662T4 15.275V13h4v-3h3.375L8.1 3.45l1.8-.9l3.275 6.55q.5 1-.075 1.95t-1.7.95H10v1q0 .825-.587 1.413T8 15H6v.275q0 .875.538 1.538T7.9 17.7l.3.075q1 .25 1.125 1.25t-.775 1.5q-1.5.825-3.162 1.15T2 22m14.3-2.85l-1.425-1.4q.525-.525.825-1.213t.3-1.487t-.3-1.487t-.825-1.213l1.425-1.425q.8.8 1.25 1.862T18 15.05t-.45 2.25t-1.25 1.85M19.125 22L17.7 20.575q1.075-1.075 1.688-2.487T20 15.05q0-1.65-.612-3.05T17.7 9.525L19.125 8.1q1.35 1.35 2.113 3.125T22 15.05q0 2.025-.763 3.813T19.126 22"></svg:path>`,
})
export class MaterialSymbolsVoiceSelectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVoiceSelectionOffIcon],svg[material-symbols-voice-selection-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.375 18.5l-1.6-1.6q.5-2.025-.075-4t-2.075-3.45l1.4-1.45Q20.4 9.35 21.2 11.15t.8 3.9q0 .9-.162 1.775t-.463 1.675M13.3 10.475L9.95 7.1L8.1 3.45l1.8-.9l3.275 6.55q.175.35.2.688t-.075.687M2 22v-2q1.15 0 2.275-.15t2.2-.55q-1.15-.575-1.812-1.662T4 15.275V13h4v-3h2.025l2 2H10v1q0 .825-.587 1.413T8 15H6v.275q0 .875.538 1.538T7.9 17.7l.3.075q1 .25 1.125 1.25t-.775 1.5q-1.5.825-3.162 1.15T2 22m18.5 1.325L.7 3.5l1.4-1.4l19.8 19.8z"></svg:path>`,
})
export class MaterialSymbolsVoiceSelectionOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVoicemailIcon],svg[material-symbols-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 16q-1.875 0-3.187-1.312T2 11.5t1.313-3.187T6.5 7t3.188 1.313T11 11.5q0 .675-.2 1.3t-.55 1.2h3.5q-.35-.575-.55-1.2t-.2-1.3q0-1.875 1.313-3.187T17.5 7t3.188 1.313T22 11.5t-1.312 3.188T17.5 16zm0-2q1.05 0 1.775-.725T9 11.5t-.725-1.775T6.5 9t-1.775.725T4 11.5t.725 1.775T6.5 14m11 0q1.05 0 1.775-.725T20 11.5t-.725-1.775T17.5 9t-1.775.725T15 11.5t.725 1.775T17.5 14"></svg:path>`,
})
export class MaterialSymbolsVoicemailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVoicemail2Icon],svg[material-symbols-voicemail-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15q1.25 0 2.125-.875T19 12t-.875-2.125T16 9t-2.125.875T13 12q0 .275.038.513t.137.487h-2.35q.1-.25.138-.488T11 12q0-1.25-.875-2.125T8 9t-2.125.875T5 12t.875 2.125T8 15zm-8-2q-.425 0-.712-.288T7 12t.288-.712T8 11t.713.288T9 12t-.288.713T8 13m8 0q-.425 0-.712-.288T15 12t.288-.712T16 11t.713.288T17 12t-.288.713T16 13M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsVoicemail2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVolcanoIcon],svg[material-symbols-volcano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 22l4-9h3l2-5h7l4 14zM13 5V1h2v4zm4.525 1.875l-1.4-1.4L18.95 2.65l1.425 1.4zm-7.05 0L7.65 4.05l1.4-1.425l2.825 2.85z"></svg:path>`,
})
export class MaterialSymbolsVolcanoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVolumeDownIcon],svg[material-symbols-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15V9h4l5-5v16l-5-5zm11 1V7.95q1.125.525 1.813 1.625T18.5 12t-.687 2.4T16 16"></svg:path>`,
})
export class MaterialSymbolsVolumeDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVolumeMuteIcon],svg[material-symbols-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15V9h4l5-5v16l-5-5z"></svg:path>`,
})
export class MaterialSymbolsVolumeMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVolumeOffIcon],svg[material-symbols-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.8 22.6l-3.025-3.025q-.625.4-1.325.688t-1.45.462v-2.05q.35-.125.688-.25t.637-.3L12 14.8V20l-5-5H3V9h3.2L1.4 4.2l1.4-1.4l18.4 18.4zm-.2-5.8l-1.45-1.45q.425-.775.638-1.625t.212-1.75q0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.138T21 11.975q0 1.325-.363 2.55T19.6 16.8m-3.35-3.35L14 11.2V7.95q1.175.55 1.838 1.65T16.5 12q0 .375-.062.738t-.188.712M12 9.2L9.4 6.6L12 4z"></svg:path>`,
})
export class MaterialSymbolsVolumeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVolumeUpIcon],svg[material-symbols-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20.725v-2.05q2.25-.65 3.625-2.5t1.375-4.2t-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.138T21 11.975t-1.95 5.613T14 20.725M3 15V9h4l5-5v16l-5-5zm11 1V7.95q1.175.55 1.838 1.65T16.5 12q0 1.275-.663 2.363T14 16"></svg:path>`,
})
export class MaterialSymbolsVolumeUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVolunteerActivismIcon],svg[material-symbols-volunteer-activism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20.025V11h1.6q.175 0 .35.038t.35.087l6.925 2.575q.35.125.563.45t.212.675q0 .525-.363.85T15.8 16h-2.625q-.125 0-.187-.012t-.163-.063l-1.6-.625l-.325.975l1.925.675q.05.025.15.038t.175.012H20q.8 0 1.4.575T22 19l-7.975 3zM1 22V11h4v11zm15-9l-4.15-4.05q-.775-.75-1.312-1.662T10 5.3q0-1.375.963-2.337T13.3 2q.8 0 1.5.338t1.2.912q.5-.575 1.2-.913T18.7 2q1.375 0 2.338.963T22 5.3q0 1.075-.525 1.988t-1.3 1.662z"></svg:path>`,
})
export class MaterialSymbolsVolunteerActivismIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVotingChipIcon],svg[material-symbols-voting-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19q-2.925 0-4.962-2.037T1 12t2.038-4.962T8 5h8q2.925 0 4.963 2.038T23 12t-2.037 4.963T16 19zm.25-4h1.5v-2.25H12v-1.5H9.75V9h-1.5v2.25H6v1.5h2.25zm7.25 0H17V9h-3v1.5h1.5z"></svg:path>`,
})
export class MaterialSymbolsVotingChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVpnGoogleoneIcon],svg[material-symbols-vpn-googleone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 16q-.525 0-.887-.363q-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Zm-8.125-2q.175-2.875 2.35-5.025Q8.15 6.825 11 6.65v2q-2.025.175-3.612 1.75Q5.8 11.975 5.625 14Zm-3.5 0v-.25q.15-2.125 1.075-4.013q.925-1.887 2.413-3.325Q5.1 4.975 7 4.112q1.9-.862 4-.962v2q-1.7.1-3.262.825q-1.563.725-2.775 1.9Q3.75 9.05 3 10.6t-.875 3.275V14Zm11.625 5.4q-1.9 0-3.275-1.375T7.1 14.75q0-1.925 1.363-3.288Q9.825 10.1 11.75 10.1q1.2 0 2.163.513q.962.512 1.612 1.387H24v5.5h-1.5v2H17v-2h-1.475q-.65.875-1.638 1.387q-.987.513-2.137.513ZM19 17.5h1.5v-2H22V14h-7.7q-.25-.825-.95-1.363q-.7-.537-1.6-.537q-1.1 0-1.875.775q-.775.775-.775 1.875t.775 1.875q.775.775 1.875.775q.9 0 1.6-.538q.7-.537.95-1.362H19Z"></svg:path>`,
})
export class MaterialSymbolsVpnGoogleoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVpnKeyIcon],svg[material-symbols-vpn-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q2.025 0 3.538 1.138T12.65 10H23v4h-2v4h-4v-4h-4.35q-.6 1.725-2.113 2.863T7 18m0-4q.825 0 1.413-.587T9 12t-.587-1.412T7 10t-1.412.588T5 12t.588 1.413T7 14"></svg:path>`,
})
export class MaterialSymbolsVpnKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVpnKeyAlertIcon],svg[material-symbols-vpn-key-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q.825 0 1.413-.587T9 12t-.587-1.412T7 10t-1.412.588T5 12t.588 1.413T7 14m15 4q-.425 0-.712-.288T21 17t.288-.712T22 16t.713.288T23 17t-.288.713T22 18m-1-4V9h2v5zM7 18q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q2.025 0 3.538 1.138T12.65 10H19v8h-2v-4h-4.35q-.6 1.725-2.113 2.863T7 18"></svg:path>`,
})
export class MaterialSymbolsVpnKeyAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVpnKeyOffIcon],svg[material-symbols-vpn-key-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L12.15 15q-.8 1.35-2.137 2.175T7 18q-2.5 0-4.25-1.75T1 12q0-1.65.8-3.025T3.95 6.8L1.375 4.225L2.8 2.8l18.4 18.4zM7 14q.825 0 1.413-.587T9 12v-.175L7.175 10H7q-.825 0-1.412.588T5 12t.588 1.413T7 14m13.825 4l-8-8H23v4h-2v4z"></svg:path>`,
})
export class MaterialSymbolsVpnKeyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVpnLockIcon],svg[material-symbols-vpn-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2q.8 0 1.538.113T15 2.45V5q0 .825-.587 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h6q.425 0 .713.288T15 13v3h1q.675 0 1.188.4t.712 1q.975-1.1 1.538-2.463T20 12q0-.275-.025-.5T19.9 11h2.05q.05.275.05.5v.5q0 2.05-.787 3.875t-2.15 3.188t-3.175 2.15T12 22m-1-2.05V18q-.825 0-1.412-.587T9 16v-1l-4.8-4.8q-.075.45-.137.9T4 12q0 3.1 2.013 5.338T11 19.95M18 9q-.425 0-.712-.287T17 8V5q0-.425.288-.712T18 4V3q0-.825.588-1.412T20 1t1.413.588T22 3v1q.425 0 .713.288T23 5v3q0 .425-.288.713T22 9zm1-5h2V3q0-.425-.288-.712T20 2t-.712.288T19 3z"></svg:path>`,
})
export class MaterialSymbolsVpnLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVpnLock2Icon],svg[material-symbols-vpn-lock-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q.575 0 1.125.063t1.1.187l-.45 1.95q-.425-.1-.825-.15T12.125 4q-.775.875-1.275 1.9t-.8 2.1H14v2H9.65q-.075.5-.112 1T9.5 12t.038 1t.112 1h4.7q.075-.5.113-1t.037-1h2q0 .5-.038 1t-.112 1h3.4q.125-.5.188-1T20 12h2q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-7.75-8h3.4q-.075-.5-.112-1T7.5 12t.038-1t.112-1h-3.4q-.125.5-.187 1T4 12t.063 1t.187 1m5.1 5.55q-.425-.725-.75-1.625T8 16H5.075Q5.8 17.25 6.9 18.15t2.45 1.4M5.1 8H8q.275-1 .6-1.912t.75-1.638Q7.975 4.9 6.9 5.813T5.1 8M12 19.9q.65-.875 1.125-1.85T13.95 16h-3.9q.35 1.075.825 2.05T12 19.9m2.65-.35q1.375-.475 2.463-1.388T18.925 16H16q-.275 1-.6 1.913t-.75 1.637m2.2-9.55q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25H17V4q0-.825.588-1.412T19 2t1.413.588T21 4v1h.15q.35 0 .6.25t.25.6v3.3q0 .35-.25.6t-.6.25zM18 5h2V4q0-.425-.288-.712T19 3t-.712.288T18 4z"></svg:path>`,
})
export class MaterialSymbolsVpnLock2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVr180Create2dIcon],svg[material-symbols-vr180-create2d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20v-8q0-.825.588-1.412T12 10h8q.825 0 1.413.588T22 12v8q0 .825-.587 1.413T20 22zm.5-3h7l-2.3-3l-1.7 2.25l-1.2-1.65zM8 17.75q-2.675-.675-4.337-2.838T2 10q0-3.35 2.325-5.675T10 2q2.75 0 4.913 1.662T17.75 8H12q-1.65 0-2.825 1.175T8 12z"></svg:path>`,
})
export class MaterialSymbolsVr180Create2dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVr180Create2dOffIcon],svg[material-symbols-vr180-create2d-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17.75q-2.675-.675-4.337-2.838T2 10q0-1.125.3-2.15t.825-1.925l-2.5-2.5l1.4-1.4L21.2 21.2l-1.4 1.4l-.6-.6H12q-.825 0-1.412-.587T10 20v-7.2l-1.875-1.85q-.075.275-.1.525T8 12zM10 2q2.75 0 4.913 1.663T17.75 8H12q-.275 0-.525.025t-.525.1l-5-5.025q.925-.55 1.95-.825T10 2m2.825 8H20q.825 0 1.413.588T22 12v7.175zm3.375 9l-.7-.725l-1.425-1.4L12.5 19z"></svg:path>`,
})
export class MaterialSymbolsVr180Create2dOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVrpanoIcon],svg[material-symbols-vrpano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 15.4q1.625-.2 3.238-.3T12 15t3.263.1t3.237.3L14 10l-2.85 3.4l-2-2.4zM3 20q-.425 0-.712-.288T2 19V5q0-.425.288-.712T3 4q.2 0 .888.238t1.837.512t2.713.513T12 5.5t3.563-.238t2.712-.512t1.838-.513T21 4q.425 0 .713.288T22 5v14q0 .425-.288.713T21 20q-.2 0-.888-.238t-1.837-.512t-2.712-.513T12 18.5t-3.562.238t-2.713.512t-1.837.513T3 20"></svg:path>`,
})
export class MaterialSymbolsVrpanoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWallArtIcon],svg[material-symbols-wall-art-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20V8q0-.825.588-1.412T4 6h4l4-4l4 4h4q.825 0 1.413.588T22 8v12q0 .825-.587 1.413T20 22zm2-4h12l-3.75-5l-3 4L9 14zm11.5-5q.625 0 1.063-.437T19 11.5t-.437-1.062T17.5 10t-1.062.438T16 11.5t.438 1.063T17.5 13m-7.4-7h3.8L12 4.1z"></svg:path>`,
})
export class MaterialSymbolsWallArtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWallLampIcon],svg[material-symbols-wall-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-6h2v6zm3-2v-2h5q.425 0 .713-.288T12 16v-3H7q-.5 0-.8-.387t-.15-.888l2.4-8q.1-.325.35-.525t.6-.2h7.2q.35 0 .6.2t.35.525l2.4 8q.15.5-.15.888T19 13h-5v3q0 1.25-.875 2.125T11 19z"></svg:path>`,
})
export class MaterialSymbolsWallLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWalletIcon],svg[material-symbols-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-1.65 0-2.825-1.175T2 16V8q0-1.65 1.175-2.825T6 4h12q1.65 0 2.825 1.175T22 8v8q0 1.65-1.175 2.825T18 20zM6 8h12q.55 0 1.05.125t.95.4V8q0-.825-.587-1.412T18 6H6q-.825 0-1.412.588T4 8v.525q.45-.275.95-.4T6 8m-1.85 3.25l11.125 2.7q.225.05.45 0t.425-.2l3.475-2.9q-.275-.375-.7-.612T18 10H6q-.65 0-1.137.338t-.713.912"></svg:path>`,
})
export class MaterialSymbolsWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWallpaperIcon],svg[material-symbols-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-6h2v6h6v2zm8 0v-2h6v-6h2v6q0 .825-.587 1.413T19 21zm-7-4l3-4l2.25 3l3-4L18 17zm-3-6V5q0-.825.588-1.412T5 3h6v2H5v6zm16 0V5h-6V3h6q.825 0 1.413.588T21 5v6zm-3.5-1q-.65 0-1.075-.425T14 8.5t.425-1.075T15.5 7t1.075.425T17 8.5t-.425 1.075T15.5 10"></svg:path>`,
})
export class MaterialSymbolsWallpaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWallpaperSlideshowIcon],svg[material-symbols-wallpaper-slideshow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8q-.425 0-.712-.288T16 7t.288-.712T17 6t.713.288T18 7t-.288.713T17 8m-8 6l2.7-3.5l1.55 2l2.3-3L19 14zm-5 8q-.825 0-1.412-.587T2 20V6h2v14h14v2zM6 9.375V4q0-.825.588-1.412T8 2h5v2H8v5.375zM8 18q-.825 0-1.412-.587T6 16v-4.625h2V16h5v2zm7 0v-2h5v-4.625h2V16q0 .825-.587 1.413T20 18zm5-8.625V4h-5V2h5q.825 0 1.413.588T22 4v5.375z"></svg:path>`,
})
export class MaterialSymbolsWallpaperSlideshowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWandShineIcon],svg[material-symbols-wand-shine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.275 7.725l-3-3L6.7 3.3l3 3zM12 5.35V1.1h2v4.25zm7.275 13.375l-3-3L17.7 14.3l3 3zm-1.575-11L16.275 6.3l3-3L20.7 4.725zM18.65 12v-2h4.25v2zM5.125 21.7L2.3 18.875q-.3-.3-.3-.7t.3-.7l9.075-9.1Q12.25 7.5 13.5 7.5t2.125.875t.875 2.125t-.875 2.125l-9.1 9.075q-.3.3-.7.3t-.7-.3m6.975-8.375l2.1-2.125q.3-.3.3-.7t-.3-.7t-.7-.3t-.7.3l-2.125 2.125z"></svg:path>`,
})
export class MaterialSymbolsWandShineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWandStarsIcon],svg[material-symbols-wand-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.4 21L3 19.6l7.525-7.55L6 10.925l4.95-3.075L10.525 2L15 5.775l5.4-2.2L18.225 9L22 13.45l-5.85-.4l-3.1 4.95l-1.125-4.525zM5 8L3 6l2-2l2 2zm13 13l-2-2l2-2l2 2z"></svg:path>`,
})
export class MaterialSymbolsWandStarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWardIcon],svg[material-symbols-ward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h2q.425 0 .713.288T6 3v19q-.825 0-1.412-.587T4 20V4H3q-.425 0-.712-.288T2 3t.288-.712T3 2m6 20q-.825 0-1.412-.587T7 20V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm0-11.475q.45-.275.95-.4T11 10h5q.55 0 1.05.125t.95.4V4H9zM13.5 9q-.825 0-1.412-.588T11.5 7t.588-1.412T13.5 5t1.413.588T15.5 7t-.587 1.413T13.5 9m-1 10h2v-2h2v-2h-2v-2h-2v2h-2v2h2z"></svg:path>`,
})
export class MaterialSymbolsWardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWarehouseIcon],svg[material-symbols-warehouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V7l10-4l10 4v14h-6v-8H8v8zm7 0v-2h2v2zm2-3v-2h2v2zm2 3v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsWarehouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWarningIcon],svg[material-symbols-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21L12 2l11 19zm11-3q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m-1-3h2v-5h-2z"></svg:path>`,
})
export class MaterialSymbolsWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWarningOffIcon],svg[material-symbols-warning-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m9.875 1.05l-12.5-12.5L12 2zm-1.4 4.25l-2.3-2.3H1l6.3-10.875L.675 3.5L2.1 2.075l19.8 19.8zM11 15h1.175L11 13.825z"></svg:path>`,
})
export class MaterialSymbolsWarningOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWashIcon],svg[material-symbols-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-1.65 0-2.825-1.175T2 18v-5.4q0-.775.363-1.437t1.012-1.088l8.25-5.35l.5.5q.5.5.588 1.188T12.425 7.7L11.3 9.5H19q.425 0 .713.288T20 10.5t-.288.713T19 11.5h-7V13h9q.425 0 .713.288T22 14t-.288.713T21 15h-9v1.5h8q.425 0 .713.288T21 17.5t-.288.713T20 18.5h-8V20h6q.425 0 .713.288T19 21t-.288.713T18 22zM17.5 8q-.975 0-1.737-.763T15 5.5q0-.875.575-1.937T17.5 1q1.35 1.5 1.925 2.563T20 5.5q0 .975-.763 1.738T17.5 8"></svg:path>`,
})
export class MaterialSymbolsWashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWatchIcon],svg[material-symbols-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 22l-1.35-4.55q-1.2-.95-1.925-2.375T5 12t.725-3.075T7.65 6.55L9 2h6l1.35 4.55q1.2.95 1.925 2.375T19 12t-.725 3.075t-1.925 2.375L15 22zm3-5q2.075 0 3.538-1.463T17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17"></svg:path>`,
})
export class MaterialSymbolsWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWatchArrowIcon],svg[material-symbols-watch-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.5l-1.4-1.4l1.05-1.1H8.5v-2h3.15L10.6 9.9L12 8.5l3.5 3.5zM9 22l-1.35-4.55q-1.2-.95-1.925-2.375T5 12t.725-3.075T7.65 6.55L9 2h6l1.35 4.55q1.2.95 1.925 2.375T19 12t-.725 3.075t-1.925 2.375L15 22zm3-5q2.075 0 3.538-1.463T17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17"></svg:path>`,
})
export class MaterialSymbolsWatchArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWatchButtonPressIcon],svg[material-symbols-watch-button-press-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12V3h2v9zM7 22l-1.35-4.55q-1.2-.95-1.925-2.375T3 12t.725-3.075T5.65 6.55L7 2h6l1.35 4.55q1.2.95 1.925 2.375T17 12t-.725 3.075t-1.925 2.375L13 22zm3-5q2.075 0 3.538-1.463T15 12t-1.463-3.537T10 7T6.463 8.463T5 12t1.463 3.538T10 17"></svg:path>`,
})
export class MaterialSymbolsWatchButtonPressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWatchCheckIcon],svg[material-symbols-watch-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.95 15.175L8.1 12.35l1.425-1.4l1.425 1.4l3.525-3.525l1.425 1.4zM9 22l-1.35-4.55q-1.2-.95-1.925-2.375T5 12t.725-3.075T7.65 6.55L9 2h6l1.35 4.55q1.2.95 1.925 2.375T19 12t-.725 3.075t-1.925 2.375L15 22zm3-5q2.075 0 3.538-1.463T17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17"></svg:path>`,
})
export class MaterialSymbolsWatchCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWatchOffIcon],svg[material-symbols-watch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.8 22.6l-3.825-3.825l-.975 3.25H9l-1.35-4.55q-1.2-.95-1.925-2.375T5 12q0-.9.225-1.737t.65-1.588L1.4 4.2l1.425-1.425l18.4 18.4zM12 17q.5 0 .95-.088t.875-.262L7.35 10.175q-.175.425-.262.875T7 12q0 2.075 1.463 3.538T12 17m6.175-1.7l-1.5-1.5q.175-.425.25-.862T17 12q0-2.075-1.463-3.537T12 7q-.5 0-.937.075t-.863.25l-2.15-2.15l.95-3.2h6l1.35 4.55q1.2.95 1.925 2.375T19 12q0 .9-.2 1.725t-.625 1.575"></svg:path>`,
})
export class MaterialSymbolsWatchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWatchScreentimeIcon],svg[material-symbols-watch-screentime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14v-4h1.5v4zm2.25 0v-3h1.5v3zm2.25 0v-2H15v2zM9 22l-1.35-4.55q-1.2-.95-1.925-2.375T5 12t.725-3.075T7.65 6.55L9 2h6l1.35 4.55q1.2.95 1.925 2.375T19 12t-.725 3.075t-1.925 2.375L15 22zm3-5q2.075 0 3.538-1.463T17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17"></svg:path>`,
})
export class MaterialSymbolsWatchScreentimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWatchVibrationIcon],svg[material-symbols-watch-vibration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.475 17.5q-.7-1.225-1.088-2.613T1 12t.388-2.887T2.475 6.5l1.725 1q-.575 1-.888 2.138T3 12t.313 2.363T4.2 16.5zm19.05 0l-1.725-1q.575-1 .888-2.137T21 12t-.312-2.363T19.8 7.5l1.725-1q.7 1.225 1.088 2.613T23 12t-.387 2.888t-1.088 2.612M9 22l-1.35-4.55q-1.2-.95-1.925-2.375T5 12t.725-3.075T7.65 6.55L9 2h6l1.35 4.55q1.2.95 1.925 2.375T19 12t-.725 3.075t-1.925 2.375L15 22zm3-5q2.075 0 3.538-1.463T17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17"></svg:path>`,
})
export class MaterialSymbolsWatchVibrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWatchWakeIcon],svg[material-symbols-watch-wake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17v-2h2v2zm0-4v-2h3v2zm0-4V6.975h4V9zM7 22l-1.35-4.55q-1.2-.95-1.925-2.375T3 12t.725-3.075T5.65 6.55L7 2h6l1.35 4.55q1.2.95 1.925 2.375T17 12t-.725 3.075t-1.925 2.375L13 22zm3-5q2.075 0 3.538-1.463T15 12t-1.463-3.537T10 7T6.463 8.463T5 12t1.463 3.538T10 17"></svg:path>`,
})
export class MaterialSymbolsWatchWakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterIcon],svg[material-symbols-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18v-2q.95 0 1.413-.5T5.35 15t1.938.5t1.362.5q.95 0 1.413-.5T12 15q1.425 0 1.938.5t1.412.5q.95 0 1.388-.5t1.912-.5t1.938.5T22 16v2q-1.425 0-1.937-.5T18.65 17t-1.362.5t-1.938.5q-1.425 0-1.937-.5T12 17q-.95 0-1.412.5T8.65 18t-1.912-.5T5.35 17t-1.412.5T2 18m0-4v-2q.95 0 1.413-.5T5.35 11q1.425 0 1.913.5t1.387.5q.95 0 1.412-.5T12 11q1.425 0 1.925.5t1.375.5q.95 0 1.412-.5t1.938-.5q1.425 0 1.938.5T22 12v2q-1.475 0-1.963-.5T18.65 13t-1.362.5t-1.938.5q-1.425 0-1.937-.5T12 13q-.95 0-1.388.5T8.7 14t-1.962-.5T5.35 13t-1.412.5T2 14m0-4V8q.95 0 1.413-.5T5.35 7q1.425 0 1.913.5T8.65 8q.95 0 1.412-.5T12 7q1.425 0 1.925.5T15.3 8q.95 0 1.412-.5T18.65 7q1.425 0 1.938.5T22 8v2q-1.475 0-1.963-.5T18.65 9t-1.362.5t-1.938.5q-1.425 0-1.937-.5T12 9q-.95 0-1.388.5T8.7 10t-1.962-.5T5.35 9t-1.412.5T2 10"></svg:path>`,
})
export class MaterialSymbolsWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterBottleIcon],svg[material-symbols-water-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.825 22q-.775 0-1.35-.513t-.65-1.287l-.775-8.65q-.025-.25.088-.462t.337-.338q.2-.125.35-.3t.15-.425q0-.225-.1-.413t-.3-.312q-.25-.125-.375-.387t-.05-.538L7.8 5.75q.075-.35.35-.55t.625-.2H11.5V4H10V2h5v2h-1.5v1h2.725q.35 0 .613.2t.337.55l.675 2.625q.075.275-.05.538t-.375.387q-.2.1-.312.275t-.113.4q0 .275.138.463t.362.312t.35.338t.1.462l-.775 8.625q-.075.775-.65 1.3t-1.35.525z"></svg:path>`,
})
export class MaterialSymbolsWaterBottleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterBottleLargeIcon],svg[material-symbols-water-bottle-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20v-2q0-.825.588-1.412T7 16v-5q-.825 0-1.412-.587T5 9V7q0-.825.588-1.412T7 5h3V4H9V2h6v2h-1v1h3q.825 0 1.413.588T19 7v2q0 .825-.587 1.413T17 11v5q.825 0 1.413.588T19 18v2q0 .825-.587 1.413T17 22z"></svg:path>`,
})
export class MaterialSymbolsWaterBottleLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterDamageIcon],svg[material-symbols-water-damage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-9.15L2.2 13l-1.175-1.575L12 3l11 8.4l-1.2 1.6l-2.8-2.15V20zm7-4q.825 0 1.413-.587T14 14q0-.675-.375-1.437T12 10q-1.25 1.8-1.625 2.563T10 14q0 .825.588 1.413T12 16"></svg:path>`,
})
export class MaterialSymbolsWaterDamageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterDoIcon],svg[material-symbols-water-do-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 15q.425 0 .713-.288T8.5 14t-.288-.712T7.5 13t-.712.288T6.5 14t.288.713T7.5 15M9 12q.425 0 .713-.288T10 11t-.288-.712T9 10t-.712.288T8 11t.288.713T9 12m0 6q.425 0 .713-.288T10 17t-.288-.712T9 16t-.712.288T8 17t.288.713T9 18m1.5-3q.425 0 .713-.288T11.5 14t-.288-.712T10.5 13t-.712.288T9.5 14t.288.713t.712.287m0-6q.425 0 .713-.288T11.5 8t-.288-.712T10.5 7t-.712.288T9.5 8t.288.713T10.5 9m1.5 3q.425 0 .713-.288T13 11t-.288-.712T12 10t-.712.288T11 11t.288.713T12 12m0 6q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m1.5-3q.425 0 .713-.288T14.5 14t-.288-.712T13.5 13t-.712.288T12.5 14t.288.713t.712.287m0-6q.425 0 .713-.288T14.5 8t-.288-.712T13.5 7t-.712.288T12.5 8t.288.713T13.5 9m1.5 3q.425 0 .713-.288T16 11t-.288-.712T15 10t-.712.288T14 11t.288.713T15 12m0 6q.425 0 .713-.288T16 17t-.288-.712T15 16t-.712.288T14 17t.288.713T15 18m1.5-3q.425 0 .713-.288T17.5 14t-.288-.712T16.5 13t-.712.288T15.5 14t.288.713t.712.287M12 22q-3.425 0-5.712-2.35T4 13.8q0-2.5 1.988-5.437T12 2q4.025 3.425 6.013 6.363T20 13.8q0 3.5-2.287 5.85T12 22"></svg:path>`,
})
export class MaterialSymbolsWaterDoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterDropIcon],svg[material-symbols-water-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.275 19q.3-.025.513-.238T13 18.25q0-.35-.225-.562T12.2 17.5q-1.025.075-2.175-.562t-1.45-2.313q-.05-.275-.262-.45T7.825 14q-.35 0-.575.263t-.15.612q.425 2.275 2 3.25t3.175.875M12 22q-3.425 0-5.712-2.35T4 13.8q0-2.5 1.988-5.437T12 2q4.025 3.425 6.013 6.363T20 13.8q0 3.5-2.287 5.85T12 22"></svg:path>`,
})
export class MaterialSymbolsWaterDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterEcIcon],svg[material-symbols-water-ec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18h1l4-6h-3V8h-1l-4 6h3zm1 4q-3.425 0-5.712-2.35T4 13.8q0-2.5 1.988-5.437T12 2q4.025 3.425 6.013 6.363T20 13.8q0 3.5-2.287 5.85T12 22"></svg:path>`,
})
export class MaterialSymbolsWaterEcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterFullIcon],svg[material-symbols-water-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.7 8.375Q6.975 7.7 8.338 7.35T11.125 7q.75 0 1.488.1t1.462.3q1.25.35 1.913.475T17.4 8h.925l.425-4H5.25zM6.975 22q-.775 0-1.337-.5T5 20.225L3 2h18l-2 18.225q-.075.775-.638 1.275t-1.337.5z"></svg:path>`,
})
export class MaterialSymbolsWaterFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterHeaterIcon],svg[material-symbols-water-heater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.775 10.65q0 1.125.55 2.05t1.425 1.5q-.25-.35-.387-.75t-.138-.85q0-.575.213-1.075t.612-.875L12 8.725l1.975 1.925q.4.375.6.875t.2 1.075q0 .45-.137.85t-.388.75q.875-.575 1.425-1.5t.55-2.05q0-1.175-.625-2.2t-1.675-1.6l-.325.425q-.125.125-.275.212T13 7.576q-.325 0-.55-.225t-.225-.55v-2l-.7.4q-.7.4-1.525 1.163t-1.525 1.85t-.7 2.437m4.225.175l-.925.9q-.2.2-.275.413t-.075.462q0 .525.375.888t.9.362t.9-.362t.375-.888q0-.275-.075-.475t-.275-.4zM6 22q-.825 0-1.412-.587T4 20V6q0-1.65 1.175-2.825T8 2h8q1.65 0 2.825 1.175T20 6v14q0 .825-.587 1.413T18 22zm3-5q.825 0 1.238-.5T12 16t1.8.5t1.2.5t1.2-.5T18 16V6q0-.825-.587-1.412T16 4H8q-.825 0-1.412.588T6 6v10q1.35 0 1.763.5T9 17"></svg:path>`,
})
export class MaterialSymbolsWaterHeaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterLockIcon],svg[material-symbols-water-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zm10 14q-1.05 0-1.775-.725T16.5 19.5q0-.5.175-.913t.475-.762L19 15.75l1.85 2.075q.3.35.475.763t.175.912q0 1.05-.725 1.775T19 22m-7-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17m-6 5q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v4.1q-.275-.05-.525-.075T18.95 14q-2.05 0-3.5 1.45T14 18.975q0 .825.25 1.6T15.025 22z"></svg:path>`,
})
export class MaterialSymbolsWaterLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterLossIcon],svg[material-symbols-water-loss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.45 15q1.125-.5 2.3-.75t2.375-.25q.75 0 1.488.1t1.462.3q1.25.35 1.913.475T17.4 15h.15l1.2-11H5.25zm.525 7q-.775 0-1.337-.5T5 20.225L3 2h18l-2 18.225q-.075.775-.638 1.275t-1.337.5z"></svg:path>`,
})
export class MaterialSymbolsWaterLossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterLuxIcon],svg[material-symbols-water-lux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V3h3v2zm3.125 5.325L4.7 8.925L6.825 6.8L8.25 8.2zM12 8Q9.925 8 8.463 6.537T7 3h10q0 2.075-1.463 3.538T12 8m-1 4V9h2v3zm6.875-1.675l-2.1-2.125l1.4-1.4L19.3 8.9zM18 5V3h3v2zM2 21v-2q.95 0 1.413-.5T5.35 18t1.938.5t1.362.5q.95 0 1.413-.5T12 18q1.425 0 1.938.5t1.412.5q.95 0 1.388-.5t1.912-.5t1.938.5T22 19v2q-1.425 0-1.937-.5T18.65 20t-1.362.5t-1.938.5q-1.425 0-1.937-.5T12 20q-.95 0-1.412.5T8.65 21t-1.912-.5T5.35 20t-1.412.5T2 21m0-4v-2q.95 0 1.413-.5T5.35 14q1.425 0 1.913.5t1.387.5q.95 0 1.412-.5T12 14q1.425 0 1.925.5t1.375.5q.95 0 1.412-.5t1.938-.5q1.425 0 1.938.5T22 15v2q-1.475 0-1.963-.5T18.65 16t-1.362.5t-1.938.5q-1.425 0-1.937-.5T12 16q-.95 0-1.388.5T8.7 17t-1.962-.5T5.35 16t-1.412.5T2 17"></svg:path>`,
})
export class MaterialSymbolsWaterLuxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterMediumIcon],svg[material-symbols-water-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.125 12.15q1.175-.575 2.438-.862T11.125 11q.75 0 1.488.1t1.462.3q1.25.35 1.913.475T17.4 12h.475l.875-8H5.25zm.85 9.85q-.775 0-1.338-.5T5 20.225L3 2h18l-2 18.225q-.075.775-.638 1.275t-1.337.5z"></svg:path>`,
})
export class MaterialSymbolsWaterMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterOrpIcon],svg[material-symbols-water-orp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 22q-.425 0-.712-.288T6.5 21v-4q0-.425.288-.712T7.5 16H10q.425 0 .713.288T11 17v4q0 .425-.288.713T10 22zm.5-1.5h1.5v-3H8zm4 1.5v-6h3.5q.625 0 1.063.438T17 17.5v1q0 .45-.25.825t-.65.575L17 22h-1.5l-.85-2H13.5v2zm6 0v-6h3.5q.625 0 1.063.438T23 17.5v1q0 .625-.437 1.063T21.5 20h-2v2zm-4.5-3.5h2v-1h-2zm6 0h2v-1h-2zm-15 1.35q-1.175-1.125-1.838-2.675T2 13.8q0-2.5 1.988-5.437T10 2q4.025 3.425 6.013 6.363T18 13.8v.2H6.5q-.825 0-1.412.588T4.5 16z"></svg:path>`,
})
export class MaterialSymbolsWaterOrpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterPhIcon],svg[material-symbols-water-ph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22v-6h3.5q.6 0 1.05.45T16 17.5v1q0 .6-.45 1.05T14.5 20h-2v2zm6 0v-6h1.5v2h2v-2H22v6h-1.5v-2.5h-2V22zm-4.5-3.5h2v-1h-2zM9 21.95q-3.05-.35-5.025-2.625T2 13.8q0-2.5 1.988-5.437T10 2q4.025 3.425 6.013 6.363T18 13.8v.2h-7q-.825 0-1.412.588T9 16z"></svg:path>`,
})
export class MaterialSymbolsWaterPhIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterPumpIcon],svg[material-symbols-water-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 9l-.85 1.25q-.675 1.05-.913 1.613T10 13q0 .825.588 1.413T12 15t1.413-.587T14 13q0-.575-.238-1.137t-.912-1.613zm0 9.25q-2.6 0-4.425-1.825T5.75 12t1.825-4.425T12 5.75t4.425 1.825T18.25 12t-1.825 4.425T12 18.25M21 12v-1h-1.325q-.275-2-1.437-3.588T15.325 5H21V4h2v8zM1 20v-8h2v1h1.325q.275 2 1.438 3.588T8.675 19H3v1z"></svg:path>`,
})
export class MaterialSymbolsWaterPumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterVocIcon],svg[material-symbols-water-voc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.8 22.475l-.425-.95q-.2-.425-.288-.887T14 19.7q0-.55.125-1.087t.375-1.038q.2-.425.35-.862T15 15.8q0-.375-.088-.725t-.237-.7l-.35-.75l1.375-.6l.425.9q.2.425.288.9t.087.975q0 .55-.125 1.075T16 17.9q-.2.425-.35.875t-.15.925q0 .35.075.688t.225.662l.375.825zm3 0l-.425-.95q-.2-.425-.288-.887T17 19.7q0-.55.125-1.087t.375-1.038q.2-.425.35-.862T18 15.8q0-.375-.088-.725t-.237-.7l-.35-.75l1.375-.6l.425.9q.2.45.288.913t.087.962q0 .55-.125 1.075T19 17.9q-.2.425-.35.875t-.15.925q0 .35.075.688t.225.662l.375.825zm3 0l-.425-.95q-.2-.425-.288-.887T20 19.7q0-.55.125-1.087t.375-1.038q.2-.425.35-.862T21 15.8q0-.375-.088-.725t-.237-.7l-.35-.75l1.375-.6l.425.9q.2.425.288.9t.087.975q0 .55-.125 1.088T22 17.925q-.2.425-.35.863t-.15.912q0 .35.075.688t.225.662l.375.825zM4 13.8q0-2.5 1.988-5.437T12 2q2.95 2.5 4.788 4.75t2.637 4.275H14q-.825 0-1.412.588T12 13.025V22q-3.425 0-5.712-2.35T4 13.8"></svg:path>`,
})
export class MaterialSymbolsWaterVocIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterfallChartIcon],svg[material-symbols-waterfall-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-6h3v6zm5-6V9h3v5zm5-5V4h3v5zm5 11V4h3v16z"></svg:path>`,
})
export class MaterialSymbolsWaterfallChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWavesIcon],svg[material-symbols-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20.35V18.4q.725 0 1.238-.225t1.037-.488t1.163-.475T7 17q.95 0 1.563.213t1.137.474t1.05.488T12 18.4t1.25-.225t1.05-.488t1.15-.475T17 17q.95 0 1.575.213t1.15.474t1.05.488T22 18.4v1.95q-.95 0-1.588-.225t-1.162-.487t-1.025-.475T17 18.95q-.7 0-1.213.213t-1.025.475t-1.15.487T12 20.35t-1.613-.225t-1.15-.487t-1.012-.475T7 18.95q-.7 0-1.213.213t-1.037.475t-1.163.487T2 20.35m0-4.45v-1.95q.725 0 1.237-.225t1.038-.487t1.162-.475T7 12.55q.95 0 1.563.213t1.137.475t1.05.487t1.25.225t1.25-.225t1.05-.487t1.15-.475T17 12.55q.95 0 1.575.213t1.15.475t1.05.487T22 13.95v1.95q-.95 0-1.588-.225t-1.162-.488t-1.025-.474T17 14.5t-1.237.213t-1.026.475t-1.137.487t-1.6.225t-1.612-.225t-1.15-.488t-1.013-.474T7 14.5q-.7 0-1.212.213t-1.038.475t-1.162.487T2 15.9m0-4.45V9.5q.725 0 1.238-.225t1.037-.488t1.163-.475T7 8.1q.95 0 1.563.213t1.137.474t1.05.488T12 9.5t1.25-.225t1.05-.488t1.15-.475T17 8.1q.95 0 1.575.213t1.15.474t1.05.488T22 9.5v1.95q-.95 0-1.588-.225t-1.162-.487t-1.025-.475T17 10.05q-.7 0-1.213.213t-1.025.475t-1.15.487T12 11.45t-1.613-.225t-1.15-.487t-1.012-.475T7 10.05q-.7 0-1.213.213t-1.037.475t-1.163.487T2 11.45M2 7V5.05q.725 0 1.237-.225t1.038-.487t1.162-.475T7 3.65q.95 0 1.563.213t1.137.475t1.05.487T12 5.05t1.25-.225t1.05-.488t1.15-.474T17 3.65q.95 0 1.575.213t1.15.475t1.05.487T22 5.05V7q-.95 0-1.588-.225t-1.162-.487t-1.025-.475T17 5.6q-.7 0-1.213.213t-1.025.475t-1.15.487T12 7t-1.613-.225t-1.15-.488t-1.012-.474T7 5.6q-.7 0-1.213.213t-1.037.475t-1.163.487T2 7"></svg:path>`,
})
export class MaterialSymbolsWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWavingHandIcon],svg[material-symbols-waving-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.975 7q0-2.5 1.763-4.262T7 .974V3Q5.35 3 4.175 4.175T3 7zM5.3 18.725Q3.025 16.45 3.025 13.25T5.3 7.775L7.05 6l.3.3q.725.725.725 1.762T7.35 9.826l-.35.35q-.3.3-.3.713t.3.712l.9.9q.65.65.65 1.575T7.9 15.65l1.075 1.075q1.1-1.1 1.1-2.637T8.95 11.425l-.55-.55q.65-.65.925-1.463T9.55 7.75l4.475-4.475q.3-.3.713-.3t.712.3t.3.712t-.3.713l-4.675 4.675l1.05 1.05l6.025-6q.3-.3.7-.3t.7.3t.3.7t-.3.7l-6 6.025l1.05 1.05l5.3-5.3q.3-.3.713-.3t.712.3t.3.713t-.3.712l-5.3 5.3l1.05 1.05l4.05-4.05q.3-.3.713-.3t.712.3t.3.713t-.3.712l-6 5.975Q13.975 21 10.775 21T5.3 18.725m11.7 4.3V21q1.65 0 2.825-1.175T21 17h2.025q0 2.5-1.763 4.263T17 23.025"></svg:path>`,
})
export class MaterialSymbolsWavingHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbAutoIcon],svg[material-symbols-wb-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.825 15h1.2l.65-1.8h2.8l.65 1.8h1.2l-2.6-7h-1.3zm2.2-2.8l1-2.9h.1l1 2.9zm1.05 6.8q-2.925 0-4.962-2.037T1.075 12t2.038-4.962T8.075 5q1.875 0 3.463.925t2.537 2.525l-.1-.45h1.2l1.2 5.1h.05l1.45-5.1h1.1l1.45 5.1h.1l1.2-5.1h1.2l-1.85 7h-1.15l-1.5-5.25h-.05L16.925 15h-1.15l-.7-2.9q0 2.875-2.05 4.888T8.075 19"></svg:path>`,
})
export class MaterialSymbolsWbAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbIncandescentIcon],svg[material-symbols-wb-incandescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22v-3h2v3zm-9-9v-2h3v2zm17 0v-2h3v2zm-1 6.9l-2.1-2.1l1.4-1.4l2.1 2.1zm-12 0l-1.4-1.4l2.1-2.1l1.4 1.4zm6-2.9q-2.075 0-3.537-1.463T7 12q0-1.2.538-2.238T9 8V3h6v5q.925.725 1.463 1.763T17 12q0 2.075-1.463 3.538T12 17m-1-9.9q.25-.05.5-.075T12 7t.5.025t.5.075V5h-2z"></svg:path>`,
})
export class MaterialSymbolsWbIncandescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbShadeIcon],svg[material-symbols-wb-shade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 20L14 14.5V12l8 8zM14 20v-3l3 3zM4 20V10H2l6-6l6 6h-2v10zm3-6h2v-4H7z"></svg:path>`,
})
export class MaterialSymbolsWbShadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbSunnyIcon],svg[material-symbols-wb-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4V1h2v3zm0 19v-3h2v3zm9-10v-2h3v2zM1 13v-2h3v2zm17.7-6.3l-1.4-1.4l1.75-1.8l1.45 1.45zM4.95 20.5L3.5 19.05l1.8-1.75l1.4 1.4zm14.1 0l-1.75-1.8l1.4-1.4l1.8 1.75zM5.3 6.7L3.5 4.95L4.95 3.5L6.7 5.3zM12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18"></svg:path>`,
})
export class MaterialSymbolsWbSunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbTwilightIcon],svg[material-symbols-wb-twilight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.35 10.1l-1.4-1.45l2.15-2.1l1.4 1.4zM2 20v-2h20v2zm9-13V4h2v3zm-5.35 3.05L3.55 7.9l1.4-1.4L7.1 8.65zM5 16q0-2.925 2.038-4.962T12 9t4.963 2.038T19 16z"></svg:path>`,
})
export class MaterialSymbolsWbTwilightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWcIcon],svg[material-symbols-wc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 22v-7.5H4V9q0-.825.588-1.412T6 7h3q.825 0 1.413.588T11 9v5.5H9.5V22zm2-16q-.825 0-1.412-.587T5.5 4t.588-1.412T7.5 2t1.413.588T9.5 4t-.587 1.413T7.5 6M15 22v-6h-3l2.55-7.65q.2-.65.738-1T16.5 7t1.213.35t.737 1L21 16h-3v6zm1.5-16q-.825 0-1.412-.587T14.5 4t.588-1.412T16.5 2t1.413.588T18.5 4t-.587 1.413T16.5 6"></svg:path>`,
})
export class MaterialSymbolsWcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherHailIcon],svg[material-symbols-weather-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 23L11 21.5l1.5-1.5l1.5 1.5zm-3.45-1.5L8 20.45l2.95-2.95L12 18.55zM15.5 20L14 18.5l1.5-1.5l1.5 1.5zm-9 0L5 18.5L6.5 17L8 18.5zm1-4q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16z"></svg:path>`,
})
export class MaterialSymbolsWeatherHailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherMixIcon],svg[material-symbols-weather-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 23q-.625 0-1.062-.425T11 21.525q0-.3.113-.575t.337-.475l1.05-.975l1.05.975q.225.2.338.475t.112.575q0 .625-.437 1.05T12.5 23m-3.45-1.5L8 20.45l2.95-2.95L12 18.55zM15.5 20L14 18.5l1.5-1.5l1.5 1.5zm-9 0L5 18.5L6.5 17L8 18.5zm1-4q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16z"></svg:path>`,
})
export class MaterialSymbolsWeatherMixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeatherSnowyIcon],svg[material-symbols-weather-snowy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 19q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T6.5 19m3 3q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T9.5 22m3-3q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T12.5 19m6 0q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T18.5 19m-3 3q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T15.5 22m-8-7q-2.275 0-3.887-1.612T2 9.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 1q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 10.5q0 1.875-1.312 3.188T17.5 15z"></svg:path>`,
})
export class MaterialSymbolsWeatherSnowyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebIcon],svg[material-symbols-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h10.5v-3.5H4zm12.5 0H20V9h-3.5zM4 12.5h10.5V9H4z"></svg:path>`,
})
export class MaterialSymbolsWebIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebAssetIcon],svg[material-symbols-web-asset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4z"></svg:path>`,
})
export class MaterialSymbolsWebAssetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebAssetOffIcon],svg[material-symbols-web-asset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.45 23.3l-3.3-3.3H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4v2.85L.65 3.5l1.425-1.425l19.8 19.8zM4 18h11.15l-10-10H4zm17.775.925L20 17.15V8h-9.15l-4-4H20q.825 0 1.413.588T22 6v12q0 .25-.05.488t-.175.437"></svg:path>`,
})
export class MaterialSymbolsWebAssetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebStoriesIcon],svg[material-symbols-web-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20V4q.825 0 1.413.588T19 6v12q0 .825-.587 1.413T17 20M4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h9q.825 0 1.413.588T15 4v16q0 .825-.587 1.413T13 22zm17-4V6q.625 0 1.063.438T22.5 7.5v9q0 .625-.437 1.063T21 18"></svg:path>`,
})
export class MaterialSymbolsWebStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebTrafficIcon],svg[material-symbols-web-traffic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12v-2h3v2zm3.4 5.55L4 16.1L6.1 14l1.45 1.4zM6.1 8L4 5.9l1.4-1.45L7.55 6.6zM18 20l-4.75-4.75L12 19L9 9l10 3l-3.7 1.3L20 18zM10 6V3h2v3zm5.9 2l-1.45-1.4l2.15-2.15l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsWebTrafficIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebhookIcon],svg[material-symbols-webhook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21q-2.075 0-3.537-1.463T2 16q0-1.825 1.138-3.187T6 11.1v2.075q-.875.3-1.437 1.075T4 16q0 1.25.875 2.125T7 19t2.125-.875T10 16v-1h5.875q.2-.225.488-.363T17 14.5q.625 0 1.063.438T18.5 16t-.437 1.063T17 17.5q-.35 0-.638-.137T15.876 17H11.9q-.35 1.725-1.713 2.863T7 21m10 0q-1.4 0-2.537-.687T12.675 18.5h2.675q.35.25.775.375T17 19q1.25 0 2.125-.875T20 16t-.875-2.125T17 13q-.5 0-.925.138t-.8.412l-3.05-5.075q-.525-.1-.875-.5T11 7q0-.625.438-1.062T12.5 5.5t1.063.438T14 7v.213q0 .087-.05.212l2.175 3.65q.2-.05.425-.062T17 11q2.075 0 3.538 1.463T22 16t-1.463 3.538T17 21M7 17.5q-.625 0-1.062-.437T5.5 16q0-.55.35-.95t.85-.525l2.35-3.9q-.725-.675-1.138-1.612T7.5 7q0-2.075 1.463-3.537T12.5 2t3.538 1.463T17.5 7h-2q0-1.25-.875-2.125T12.5 4t-2.125.875T9.5 7q0 1.075.65 1.888t1.65 1.037L8.425 15.55q.05.125.063.225T8.5 16q0 .625-.437 1.063T7 17.5"></svg:path>`,
})
export class MaterialSymbolsWebhookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeekendIcon],svg[material-symbols-weekend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-1.25 0-2.125-.875T1 17v-5q0-.825.588-1.412T3 10t1.413.588T5 12v4h14v-4q0-.825.588-1.412T21 10t1.413.588T23 12v5q0 1.25-.875 2.125T20 20zm3-6v-2q0-1.325-.862-2.325T4 8.3V7q0-1.25.875-2.125T7 4h10q1.25 0 2.125.875T20 7v1.3q-1.325.275-2.162 1.313T17 12v2z"></svg:path>`,
})
export class MaterialSymbolsWeekendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeightIcon],svg[material-symbols-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m2.825 0h1.75q.75 0 1.3.5t.675 1.225l1.425 10q.125.9-.462 1.588T18 21H6q-.925 0-1.513-.687t-.462-1.588l1.425-10Q5.575 8 6.125 7.5t1.3-.5h1.75q-.075-.25-.125-.487T9 6q0-1.25.875-2.125T12 3t2.125.875T15 6q0 .275-.05.513T14.825 7"></svg:path>`,
})
export class MaterialSymbolsWeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWestIcon],svg[material-symbols-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 19l-7-7l7-7l1.4 1.4L5.825 11H22v2H5.825l4.6 4.6z"></svg:path>`,
})
export class MaterialSymbolsWestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWhatshotIcon],svg[material-symbols-whatshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.5 0-4.587-1.1T3.95 17.95l4.1-4.1l3 2.5L16 11.4V14h2V8h-6v2h2.6l-3.65 3.65l-3-2.5L2.9 16.2q-.425-.95-.662-2.013T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsWhatshotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWheelchairPickupIcon],svg[material-symbols-wheelchair-pickup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6q-.825 0-1.412-.587T4.5 4t.588-1.412T6.5 2t1.413.588T8.5 4t-.587 1.413T6.5 6M5 22v-7H3V9q0-.825.588-1.412T5 7h3q.825 0 1.413.588T10 9v1.95q-1.575.9-2.537 2.5T6.5 17q0 1.425.525 2.688T8.5 21.9v.1zm8.5 0q-2.075 0-3.537-1.463T8.5 17q0-1.675.988-2.963T12 12.25v2.175q-.675.4-1.088 1.075T10.5 17q0 1.25.875 2.125T13.5 20t2.125-.875T16.5 17h2q0 2.075-1.463 3.538T13.5 22m7.425-2.3L18.45 16H13V8h2v6h4.55l3.05 4.6z"></svg:path>`,
})
export class MaterialSymbolsWheelchairPickupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWhereToVoteIcon],svg[material-symbols-where-to-vote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.95 13.35L15.9 8.4l-1.425-1.425L10.95 10.5l-1.4-1.4l-1.425 1.425zM12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"></svg:path>`,
})
export class MaterialSymbolsWhereToVoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWhiteboardIcon],svg[material-symbols-whiteboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18v-5l9.95-9.95Q16 2 17.45 2t2.5 1.05Q21 4.1 21 5.55t-1.05 2.5L10 18Zm2-2h2.175l9.375-9.375q.45-.45.45-1.088q0-.637-.45-1.087Q18.1 4 17.462 4q-.637 0-1.087.45L7 13.825Zm-4 6v-2h18v2Z"></svg:path>`,
})
export class MaterialSymbolsWhiteboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetMediumIcon],svg[material-symbols-widget-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-6h6v6zm7 0v-6h6v6zm7 0v-6h6v6zM2 15V9h6v6zm7 0V9h6v6zm7 0V9h6v6zM2 8V2h13v6zm14 0V2h6v6z"></svg:path>`,
})
export class MaterialSymbolsWidgetMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetSmallIcon],svg[material-symbols-widget-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-6h6v6zm7 0v-6h6v6zm7 0v-6h6v6zM2 15V9h6v6zm7 0V9h6v6zm7 0V9h6v6zM2 8V2h6v6zm7 0V2h6v6zm7 0V2h6v6z"></svg:path>`,
})
export class MaterialSymbolsWidgetSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetWidthIcon],svg[material-symbols-widget-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-6h6v6zm7 0v-6h6v6zm7 0v-6h6v6zM2 15V9h6v6zm7 0V9h6v6zm7 0V9h6v6zM2 8V2h20v6z"></svg:path>`,
})
export class MaterialSymbolsWidgetWidthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetsIcon],svg[material-symbols-widgets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.65 13L11 7.35l5.65-5.65l5.65 5.65zM3 11V3h8v8zm10 10v-8h8v8zM3 21v-8h8v8z"></svg:path>`,
})
export class MaterialSymbolsWidgetsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthIcon],svg[material-symbols-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 16l-4-4l4-4l1.425 1.4l-1.6 1.6h10.35L15.6 9.4L17 8l4 4l-4 4l-1.4-1.4l1.575-1.6H6.825L8.4 14.6z"></svg:path>`,
})
export class MaterialSymbolsWidthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthFullIcon],svg[material-symbols-width-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h1V6H4zm15 0h1V6h-1z"></svg:path>`,
})
export class MaterialSymbolsWidthFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthNormalIcon],svg[material-symbols-width-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h4V6H4zm12 0h4V6h-4z"></svg:path>`,
})
export class MaterialSymbolsWidthNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthWideIcon],svg[material-symbols-width-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h2V6H4zm14 0h2V6h-2z"></svg:path>`,
})
export class MaterialSymbolsWidthWideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiIcon],svg[material-symbols-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m-5.65-5.65l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1"></svg:path>`,
})
export class MaterialSymbolsWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifi1BarIcon],svg[material-symbols-wifi-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21"></svg:path>`,
})
export class MaterialSymbolsWifi1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifi2BarIcon],svg[material-symbols-wifi-2-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m-5.65-5.65l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725"></svg:path>`,
})
export class MaterialSymbolsWifi2BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiAddIcon],svg[material-symbols-wifi-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.475 2.475q-.575-.275-1.213-.413t-1.287-.137q-2.525 0-4.3 1.775T12.95 17q0 .65.138 1.288T13.5 19.5zm6 0v-3h-3v-2h3v-3h2v3h3v2h-3v3z"></svg:path>`,
})
export class MaterialSymbolsWifiAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingIcon],svg[material-symbols-wifi-calling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M16.5 10.5l-5.525-5.55Q12.225 4 13.65 3.5T16.5 3q1.4 0 2.813.513T22 5z"></svg:path>`,
})
export class MaterialSymbolsWifiCallingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar1Icon],svg[material-symbols-wifi-calling-bar-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11m3.45 10q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar2Icon],svg[material-symbols-wifi-calling-bar-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11M14 8.55L12.95 7.5q.725-.725 1.638-1.112T16.5 6t1.913.388T20.05 7.5L19 8.55q-.5-.5-1.137-.775T16.5 7.5t-1.362.275T14 8.55M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiCallingBar3Icon],svg[material-symbols-wifi-calling-bar-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11q-.425 0-.712-.288T15.5 10t.288-.712T16.5 9t.713.288t.287.712t-.288.713T16.5 11M14 8.55L12.95 7.5q.725-.725 1.638-1.112T16.5 6t1.913.388T20.05 7.5L19 8.55q-.5-.5-1.137-.775T16.5 7.5t-1.362.275T14 8.55M11.9 6.4l-1.05-1.05q1.125-1.125 2.588-1.737T16.5 3t3.063.613T22.15 5.35L21.1 6.4q-.925-.925-2.113-1.412T16.5 4.5t-2.475.5T11.9 6.4M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></svg:path>`,
})
export class MaterialSymbolsWifiCallingBar3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiChannelIcon],svg[material-symbols-wifi-channel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q.275-2.175.763-4.762T5 11.6q.65-1.725 1.4-2.662T8 8q.5 0 1 .35t.975 1.075t.888 1.75t.737 2.4q.325-2.575.75-4.537t.975-3.313t1.213-2.037T16 3q1.075 0 1.925 1.275T19.4 7.9q.775 2.9 1.125 6.5T21 21h-2q-.45-2.2-1.4-4.1T16 15t-1.612 1.9T13 21h-2q-.2-1.8-.537-3.537T9.7 14.224t-.85-2.587T8 10.125q-.425.425-.85 1.5T6.3 14.2t-.762 3.238T5 21zm10.5-6.5q.575-.725 1.2-1.112T16 13t1.3.388t1.2 1.112q-.225-1.9-.513-3.488t-.612-2.837t-.675-2.05T16 5.05q-.35.275-.7 1.075t-.675 2.05t-.612 2.838T13.5 14.5"></svg:path>`,
})
export class MaterialSymbolsWifiChannelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiFindIcon],svg[material-symbols-wifi-find-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21L0 8.975q2.325-2.325 5.388-3.65T12 4t6.613 1.325T24 8.975l-1.875 1.9Q21.375 9.6 20.063 8.8T17 8q-2.5 0-4.25 1.75T11 14q0 1.725.813 3.063t2.037 2.062zm9.6-1l-2.575-2.55q-.45.275-.95.413T17 18q-1.7 0-2.85-1.15T13 14t1.15-2.85T17 10t2.85 1.15T21 14q0 .575-.137 1.075t-.413.95L23 18.6zM17 16q.85 0 1.425-.575T19 14t-.575-1.425T17 12t-1.425.575T15 14t.575 1.425T17 16"></svg:path>`,
})
export class MaterialSymbolsWifiFindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiHomeIcon],svg[material-symbols-wifi-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-9.375L2.2 12L1 10.4L12 2l11 8.4l-1.2 1.575l-1.8-1.35v.65q-.475-.15-.975-.212T18 11q-2.925 0-4.962 2.038T11 18q0 .5.075 1t.225 1zm13 3h-4v-1.5h1.425q-.65-.675-1.037-1.575T13 18q0-1.8 1.138-3.175T17 13.1v1.55q-1.1.325-1.8 1.238T14.5 18q0 .725.263 1.35t.737 1.1V19H17zm2-.1v-1.55q1.125-.35 1.813-1.263T21.5 18q0-.725-.262-1.35t-.738-1.1V17H19v-4h4v1.5h-1.425q.65.675 1.038 1.575T23 18q0 1.8-1.137 3.175T19 22.9"></svg:path>`,
})
export class MaterialSymbolsWifiHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiLockIcon],svg[material-symbols-wifi-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.475 2.475q-.575-.275-1.213-.413t-1.287-.137q-2.525 0-4.3 1.775T12.95 17q0 .65.138 1.288T13.5 19.5zm5 0q-.425 0-.712-.288T16 20v-3q0-.425.288-.712T17 16v-1q0-.825.588-1.412T19 13t1.413.588T21 15v1q.425 0 .713.288T22 17v3q0 .425-.288.713T21 21zm1-5h2v-1q0-.425-.288-.712T19 14t-.712.288T18 15z"></svg:path>`,
})
export class MaterialSymbolsWifiLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiNotificationIcon],svg[material-symbols-wifi-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-8-3v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q.575.125 1.088.375t.987.6q-1.95.55-3.662 1.6T8.85 9.325L16.5 17H20v2zm13.35-4l-1.425-1.4q.275-.275.638-.437T17.35 13t.775.163t.625.437zm-2.475-2.475L13.8 11.45q.675-.675 1.575-1.062t1.95-.388t1.963.388t1.587 1.062L19.8 12.525q-.475-.5-1.1-.763t-1.35-.262t-1.362.275t-1.113.75M12.75 10.4l-1.075-1.05q1.1-1.1 2.563-1.725T17.35 7t3.1.625T23 9.35l-1.075 1.05q-.875-.875-2.062-1.388T17.325 8.5t-2.525.513t-2.05 1.387"></svg:path>`,
})
export class MaterialSymbolsWifiNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiOffIcon],svg[material-symbols-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.75 22.6l-9.4-9.45q-1.175.275-2.187.825T6.35 15.35l-2.1-2.15q.8-.8 1.725-1.4t1.975-1.05L5.7 8.5q-1.025.525-1.913 1.163T2.1 11.1L0 8.95q.8-.8 1.663-1.437T3.5 6.3L1.4 4.2l1.4-1.4l18.4 18.4zM12 21q-1.05 0-1.775-.737T9.5 18.5q0-1.05.725-1.775T12 16t1.775.725t.725 1.775q0 1.025-.725 1.763T12 21m5.9-5.95l-.725-.725l-.725-.725l-3.6-3.6q2.025.2 3.787 1.025T19.75 13.2zm4-3.95q-1.925-1.925-4.462-3.012T12 7q-.525 0-1.012.038T10 7.15L7.45 4.6q1.1-.3 2.238-.45T12 4q3.55 0 6.625 1.325T24 8.95z"></svg:path>`,
})
export class MaterialSymbolsWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiPasswordIcon],svg[material-symbols-wifi-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.125 11.1L0 8.975q2.325-2.325 5.388-3.65T12 4t6.613 1.325T24 8.975L21.875 11.1q-1.9-1.925-4.437-3.012T12 7T6.563 8.088T2.125 11.1m4.225 4.25l-2.1-2.125q1.5-1.5 3.488-2.362T12 10t4.263.863t3.487 2.362l-2.1 2.125q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m7 3q-.425 0-.712-.288T18 23v-3q0-.425.288-.712T19 19v-1q0-.825.588-1.412T21 16t1.413.588T23 18v1q.425 0 .713.288T24 20v3q0 .425-.288.713T23 24zm1-5h2v-1q0-.425-.288-.712T21 17t-.712.288T20 18z"></svg:path>`,
})
export class MaterialSymbolsWifiPasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiProtectedSetupIcon],svg[material-symbols-wifi-protected-setup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.675 18.75q.425-.825.65-1.737t.225-1.888q0-2-.875-3.662T13.3 8.7L11 11V3h8l-2.3 2.3q1.3 1.175 2.075 2.8t.775 3.525q0 2.275-1.063 4.125t-2.812 3M5 21l2.3-2.3q-1.325-1.175-2.087-2.8t-.763-3.525q0-2.275 1.063-4.125t2.837-3q-.425.825-.663 1.738T7.45 8.875q0 2 .888 3.663T10.7 15.3L13 13v8z"></svg:path>`,
})
export class MaterialSymbolsWifiProtectedSetupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiProxyIcon],svg[material-symbols-wifi-proxy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.475 2.475q-.575-.275-1.213-.413t-1.287-.137q-2.525 0-4.3 1.775T12.95 17q0 .65.138 1.288T13.5 19.5zm4 0v-7h4.25v2.75H23V21zm1.5-4.25h1.25V15.5H17.5zm0 2.75h1.25v-1.25H17.5zm2.75 0h1.25v-1.25h-1.25z"></svg:path>`,
})
export class MaterialSymbolsWifiProxyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiTetheringIcon],svg[material-symbols-wifi-tethering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.1 20.25q-1.425-1.375-2.262-3.238T2 13q0-2.075.788-3.9t2.137-3.175T8.1 3.788T12 3t3.9.788t3.175 2.137T21.213 9.1T22 13q0 2.15-.837 4.025T18.9 20.25l-1.4-1.4q1.15-1.1 1.825-2.613T20 13q0-3.35-2.325-5.675T12 5T6.325 7.325T4 13q0 1.725.675 3.225t1.85 2.6zm2.825-2.825q-.875-.825-1.4-1.963T6 13q0-2.5 1.75-4.25T12 7t4.25 1.75T18 13q0 1.325-.525 2.475t-1.4 1.95L14.65 16q.625-.575.988-1.35T16 13q0-1.65-1.175-2.825T12 9t-2.825 1.175T8 13q0 .9.363 1.663T9.35 16zM12 15q-.825 0-1.412-.587T10 13t.588-1.412T12 11t1.413.588T14 13t-.587 1.413T12 15"></svg:path>`,
})
export class MaterialSymbolsWifiTetheringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiTetheringErrorIcon],svg[material-symbols-wifi-tethering-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.1 20.25q-1.425-1.375-2.262-3.238T2 13q0-2.075.788-3.9t2.137-3.175T8.1 3.788T12 3q2.8 0 5.075 1.363T20.675 8H18.25q-1.125-1.375-2.738-2.187T12 5Q8.65 5 6.325 7.325T4 13q0 1.725.675 3.225t1.85 2.6zm2.825-2.825q-.875-.825-1.4-1.963T6 13q0-2.5 1.75-4.25T12 7t4.25 1.75T18 13q0 1.325-.525 2.475t-1.4 1.95L14.65 16q.625-.575.988-1.35T16 13q0-1.65-1.175-2.825T12 9t-2.825 1.175T8 13q0 .9.363 1.663T9.35 16zM12 15q-.825 0-1.412-.587T10 13t.588-1.412T12 11t1.413.588T14 13t-.587 1.413T12 15m9 5q-.425 0-.712-.288T20 19t.288-.712T21 18t.713.288T22 19t-.288.713T21 20m-1-4v-6h2v6z"></svg:path>`,
})
export class MaterialSymbolsWifiTetheringErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindPowerIcon],svg[material-symbols-wind-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 23q0-.825.588-1.412T12 21v-5.725q.225.1.475.15t.525.05q1.05 0 1.763-.712T15.474 13v-.225l3.2.775q.4.1.725.35t.525.6l2.275 4.1q.375.675.275 1.425t-.65 1.3Q21.15 22 20.213 22t-1.613-.675l-4.6-4.6V21q.825 0 1.413.588T16 23zm-7-2v-2h5v2zm4.15-4.25l-4.5-1.275q-.725-.2-1.187-.812T1 13.275q0-.95.663-1.612T3.275 11h8.25q-.475.35-.737.863T10.525 13q0 .575.225 1.05t.625.825L8.75 16.55q-.35.2-.763.263t-.837-.063M13 14.5q-.625 0-1.062-.437T11.5 13t.438-1.062T13 11.5t1.063.438T14.5 13t-.437 1.063T13 14.5m2.3-2.45q-.275-.675-.888-1.1T13 10.525q-.275 0-.525.05t-.475.15v-3.95q0-.425.163-.8t.462-.65l3.425-3.2q.575-.55 1.338-.625t1.412.325q.8.5 1.038 1.413t-.263 1.712zM1 9V7h5v2zm3-4V3h6v2z"></svg:path>`,
})
export class MaterialSymbolsWindPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowIcon],svg[material-symbols-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13h8v6q0 .825-.587 1.413T19 21h-6zm0-2V3h6q.825 0 1.413.588T21 5v6zm-2 0H3V5q0-.825.588-1.412T5 3h6zm0 2v8H5q-.825 0-1.412-.587T3 19v-6z"></svg:path>`,
})
export class MaterialSymbolsWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowClosedIcon],svg[material-symbols-window-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V3h16v18zm3-10h4v-1h2v1h4V6H7zm0 7h10v-5H7zm-1 1h12V5H6z"></svg:path>`,
})
export class MaterialSymbolsWindowClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowOpenIcon],svg[material-symbols-window-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V3h16v18zm3-10h4v-1h2v1h4V6H7zm-1 8h12V5H6z"></svg:path>`,
})
export class MaterialSymbolsWindowOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowSensorIcon],svg[material-symbols-window-sensor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9q-.425 0-.712-.288T21 8V4q0-.425.288-.712T22 3t.713.288T23 4v4q0 .425-.288.713T22 9M3 21V3h16v18zm3-10h4v-1h2v1h4V6H6zm0 7h10v-5H6zm-1 1h12V5H5z"></svg:path>`,
})
export class MaterialSymbolsWindowSensorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindshieldDefrostFrontIcon],svg[material-symbols-windshield-defrost-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4q2.5 0 5.213.4t5.937 1.275L20.975 17.2l-1.95-.375L20.85 7.15q-2.6-.6-4.75-.875T12 6t-4.1.275t-4.75.875l1.825 9.675l-1.95.375L.85 5.675Q4.075 4.8 6.787 4.4T12 4m5.025 16.55l-1.65-1.1l.325-.525q.15-.225.225-.462T16 17.95q0-.35-.125-.675T15.5 16.7q-.525-.525-.813-1.212T14.4 14.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18 17.95q0 .575-.162 1.1t-.463 1zm-4.2 0l-1.65-1.1l.325-.525q.15-.225.225-.462t.075-.513q0-.35-.125-.675T11.3 16.7q-.525-.525-.813-1.212T10.2 14.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.212.463t-.063.512q0 .35.125.675t.375.575q.525.525.813 1.213t.287 1.437q0 .575-.162 1.1t-.463 1zm-4.175 0l-1.675-1.1l.35-.525q.15-.225.225-.462t.075-.513q0-.35-.138-.675T7.1 16.7q-.525-.525-.812-1.213T6 14.05q0-.575.15-1.1t.475-1l.35-.5l1.675 1.1l-.35.525q-.15.2-.225.45T8 14.05q0 .35.125.675t.375.575q.525.525.813 1.213T9.6 17.95q0 .575-.162 1.1t-.463 1z"></svg:path>`,
})
export class MaterialSymbolsWindshieldDefrostFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindshieldDefrostRearIcon],svg[material-symbols-windshield-defrost-rear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18v-2h1V6H4v10h1v2H4q-.825 0-1.412-.587T2 16V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v10q0 .825-.587 1.413T20 18zm-1.975 2.55l-1.65-1.1l.325-.525q.15-.225.225-.462T16 17.95q0-.35-.125-.675T15.5 16.7q-.525-.525-.813-1.212T14.4 14.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18 17.95q0 .575-.162 1.1t-.463 1zm-4.2 0l-1.65-1.1l.325-.525q.15-.225.225-.462t.075-.513q0-.35-.125-.675T11.3 16.7q-.525-.525-.813-1.212T10.2 14.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.212.463t-.063.512q0 .35.125.675t.375.575q.525.525.813 1.213t.287 1.437q0 .575-.162 1.1t-.463 1zm-4.175 0l-1.675-1.1l.35-.525q.15-.225.225-.462t.075-.513q0-.35-.138-.675T7.1 16.7q-.525-.525-.812-1.213T6 14.05q0-.575.15-1.1t.475-1l.35-.5l1.675 1.1l-.35.525q-.15.2-.225.45T8 14.05q0 .35.125.675t.375.575q.525.525.813 1.213T9.6 17.95q0 .575-.162 1.1t-.463 1z"></svg:path>`,
})
export class MaterialSymbolsWindshieldDefrostRearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindshieldHeatFrontIcon],svg[material-symbols-windshield-heat-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8.775v-2.05q.975.2 2.013.425t2.162.525L20.85 20H3.175L.85 7.675q1.1-.3 2.125-.525T5 6.725v2.05q-.55.125-1.025.213t-.825.162L4.825 18h14.35l1.675-8.85q-.35-.075-.825-.162T19 8.775m-1.975 2.775l-1.65-1.1l.325-.525q.15-.225.225-.462T16 8.95q0-.35-.125-.675T15.5 7.7q-.525-.525-.812-1.213T14.4 5.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18 8.95q0 .575-.162 1.1t-.463 1zm-4.2 0l-1.65-1.1l.325-.525q.15-.225.225-.462t.075-.513q0-.35-.125-.675T11.3 7.7q-.525-.525-.812-1.213T10.2 5.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.212.463t-.063.512q0 .35.125.675t.375.575q.525.525.813 1.213T13.8 8.95q0 .575-.162 1.1t-.463 1zm-4.175 0l-1.675-1.1l.35-.525q.15-.225.225-.462t.075-.513q0-.35-.137-.675T7.1 7.7q-.525-.525-.812-1.213T6 5.05q0-.575.15-1.1t.475-1l.35-.5l1.675 1.1l-.35.525q-.15.2-.225.45T8 5.05q0 .35.125.675T8.5 6.3q.525.525.813 1.213T9.6 8.95q0 .575-.162 1.1t-.463 1z"></svg:path>`,
})
export class MaterialSymbolsWindshieldHeatFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWineBarIcon],svg[material-symbols-wine-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2h3v-4.1q-2.15-.35-3.575-2T6 9V3h12v6q0 2.25-1.425 3.9T13 14.9V19h3v2zM8 8h8V5H8z"></svg:path>`,
})
export class MaterialSymbolsWineBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWomanIcon],svg[material-symbols-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22v-6H7l3.05-7.7q.25-.6.775-.95T12 7t1.175.35t.775.95L17 16h-3v6zm2-16q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWoman2Icon],svg[material-symbols-woman-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 22v-6H7l3.05-7.7q.25-.6.775-.95T12 7t1.175.35t.775.95L17 16h-3.5v6zM12 6q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsWoman2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkIcon],svg[material-symbols-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm6-15h4V4h-4z"></svg:path>`,
})
export class MaterialSymbolsWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkAlertIcon],svg[material-symbols-work-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.875-.625-1.9-.95T18 11q-2.9 0-4.95 2.05T11 18q0 .775.163 1.538T11.675 21zm14 0q.2 0 .35-.15t.15-.35t-.15-.35T18 20t-.35.15t-.15.35t.15.35t.35.15m-.5-2h1v-4h-1z"></svg:path>`,
})
export class MaterialSymbolsWorkAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkHistoryIcon],svg[material-symbols-work-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.65 20.35l.7-.7l-1.85-1.85V15h-1v3.2zM10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.875-.625-1.9-.95T18 11q-2.9 0-4.95 2.05T11 18q0 .775.163 1.538T11.675 21z"></svg:path>`,
})
export class MaterialSymbolsWorkHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkUpdateIcon],svg[material-symbols-work-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 21l3-3l-.7-.7l-1.8 1.8V15h-1v4.1l-1.8-1.8l-.7.7zM10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.875-.625-1.9-.95T18 11q-2.9 0-4.95 2.05T11 18q0 .775.163 1.538T11.675 21z"></svg:path>`,
})
export class MaterialSymbolsWorkUpdateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkbenchIcon],svg[material-symbols-workbench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V8.5L12 2l10 6.5V22l-10-7Zm10-9.4l6.325-4.1L12 4.4L5.675 8.5Z"></svg:path>`,
})
export class MaterialSymbolsWorkbenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkspacePremiumIcon],svg[material-symbols-workspace-premium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.675 13.7l.875-2.85L8.25 9h2.85l.9-2.8l.9 2.8h2.85l-2.325 1.85l.875 2.85l-2.3-1.775zM6 23v-7.725q-.95-1.05-1.475-2.4T4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.525-.525 2.875T18 15.275V23l-6-2zm6-7q2.5 0 4.25-1.75T18 10t-1.75-4.25T12 4T7.75 5.75T6 10t1.75 4.25T12 16"></svg:path>`,
})
export class MaterialSymbolsWorkspacePremiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkspacesIcon],svg[material-symbols-workspaces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21q-1.65 0-2.825-1.175T2 17t1.175-2.825T6 13t2.825 1.175T10 17t-1.175 2.825T6 21m12 0q-1.65 0-2.825-1.175T14 17t1.175-2.825T18 13t2.825 1.175T22 17t-1.175 2.825T18 21m-6-10q-1.65 0-2.825-1.175T8 7t1.175-2.825T12 3t2.825 1.175T16 7t-1.175 2.825T12 11"></svg:path>`,
})
export class MaterialSymbolsWorkspacesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWoundsInjuriesIcon],svg[material-symbols-wounds-injuries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.4 22L2 20.6l2.2-2.2l-2.2-.6l.525-1.925l2.175.6l-.575-2.2l1.925-.525l.6 2.2l3.425-3.425l-2.2-.6L8.4 10l2.175.575L10 8.4l1.925-.525l.6 2.2L15.95 6.65l-2.2-.6l.525-1.925l2.2.575l-.6-2.175L17.8 2l.6 2.2L20.6 2L22 3.4l-2.2 2.2l2.2.6l-.525 1.925l-2.175-.6l.575 2.2l-1.925.525l-.6-2.2l-3.425 3.425l2.2.6L15.6 14l-2.175-.575L14 15.6l-1.925.525l-.6-2.2L8.05 17.35l2.2.6l-.525 1.925l-2.2-.575l.6 2.175L6.2 22l-.6-2.2z"></svg:path>`,
})
export class MaterialSymbolsWoundsInjuriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWrapTextIcon],svg[material-symbols-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.7 20.7L11 17l3.7-3.7l1.4 1.45L14.85 16h2.4q.725 0 1.238-.513T19 14.25t-.513-1.237t-1.237-.513H4v-2h13.25q1.575 0 2.663 1.088T21 14.25t-1.088 2.663T17.25 18h-2.4l1.25 1.25zM4 18v-2h5v2zM4 7V5h16v2z"></svg:path>`,
})
export class MaterialSymbolsWrapTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWristIcon],svg[material-symbols-wrist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21.9L6.1 17H1V7h4.6l1.1-1.125q.425-.425.975-.65T8.825 5H19q.425 0 .713.288T20 6t-.288.713T19 7h-5v1.5h7q.425 0 .713.288T22 9.5t-.288.713T21 10.5h-7V12h8q.425 0 .713.288T23 13t-.288.713T22 14h-8v1.5h6q.425 0 .713.288T21 16.5t-.288.713T20 17.5h-7.875l.15.3q.425.875.263 1.813t-.838 1.612z"></svg:path>`,
})
export class MaterialSymbolsWristIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWrongLocationIcon],svg[material-symbols-wrong-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q.425 0 .875.05t.875.1l2.4 2.4l-2.1 2.1l2.825 2.825l2.1-2.1l.775.8q.1.5.175 1T20 10.2q0 2.5-1.987 5.438T12 22m4.875-13.95l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4l-2.1 2.1l2.1 2.1l-1.4 1.4l-2.1-2.1z"></svg:path>`,
})
export class MaterialSymbolsWrongLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWysiwygIcon],svg[material-symbols-wysiwyg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V7H5zm2-7v-2h10v2zm0 4v-2h6v2z"></svg:path>`,
})
export class MaterialSymbolsWysiwygIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYardIcon],svg[material-symbols-yard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q0-2.5-1.75-4.25T6 13q0 2.5 1.75 4.25T12 19m0-5.05q.65 0 1.1-.45t.45-1.1v-.15q.2.15.412.225t.488.075q.65 0 1.1-.45T16 11q0-.5-.238-.875T15.1 9.6q.425-.15.663-.525T16 8.2q0-.65-.45-1.1t-1.1-.45q-.275 0-.487.075t-.413.225V6.8q0-.65-.45-1.1T12 5.25t-1.1.45t-.45 1.1v.15q-.2-.15-.412-.225T9.55 6.65q-.65 0-1.1.45T8 8.2q0 .5.238.875T8.9 9.6q-.425.15-.662.525T8 11q0 .65.45 1.1t1.1.45q.275 0 .488-.075t.412-.225v.15q0 .65.45 1.1t1.1.45m0-2.8q-.65 0-1.1-.437T10.45 9.6q0-.65.45-1.1t1.1-.45t1.1.45t.45 1.1q0 .675-.45 1.113t-1.1.437M12 19q2.5 0 4.25-1.75T18 13q-2.5 0-4.25 1.75T12 19m-8 3q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.587 1.413T20 22z"></svg:path>`,
})
export class MaterialSymbolsYardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYourTripsIcon],svg[material-symbols-your-trips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h8v-2H8zm-1 4q-.825 0-1.412-.587T5 20v-8q0-2.125 1.113-3.8T9 5.7V5q0-1.25.875-2.125T12 2t2.125.875T15 5v.7q1.775.825 2.888 2.5T19 12v8q0 .825-.587 1.413T17 22zm4-16.9q.275-.05.5-.075T12 5t.5.025t.5.075V5q0-.425-.288-.713T12 4t-.712.288T11 5zm-.85 9.4L12 13.1l1.85 1.4l-.7-2.275L15 10.9h-2.275L12 8.5l-.725 2.4H9l1.85 1.325z"></svg:path>`,
})
export class MaterialSymbolsYourTripsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYoutubeActivityIcon],svg[material-symbols-youtube-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.4 17.95q-.675.025-1.287.038T13.025 18H12q-1.775 0-3.325-.05q-1.325-.05-2.613-.137T4.2 17.575q-.65-.175-1.125-.65t-.65-1.125q-.15-.575-.237-1.4t-.138-1.575Q2 11.925 2 11t.05-1.825q.05-.75.138-1.575t.237-1.4q.175-.65.65-1.125t1.125-.65q.575-.15 1.863-.238t2.612-.137Q10.225 4 12 4t3.325.05q1.325.05 2.613.138t1.862.237q.65.175 1.125.65t.65 1.125q.15.575.238 1.4t.137 1.575q.05.9.05 1.825v.425q-.475-.2-.975-.312T20 11q-2.075 0-3.537 1.463T15 16q0 .525.1 1.013t.3.937M10 14l5.2-3L10 8zm9 5v-2h-2v-2h2v-2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsYoutubeActivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYoutubeMusicIcon],svg[material-symbols-youtube-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2.5q3.125 0 5.312-2.188Q19.5 15.125 19.5 12q0-3.125-2.188-5.312Q15.125 4.5 12 4.5q-3.125 0-5.312 2.188Q4.5 8.875 4.5 12q0 3.125 2.188 5.312Q8.875 19.5 12 19.5Zm0-1.5q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm-2-2.5l5.5-3.5L10 8.5Z"></svg:path>`,
})
export class MaterialSymbolsYoutubeMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYoutubeSearchedForIcon],svg[material-symbols-youtube-searched-for-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.55 20.45L14.8 14.7q-.8.65-1.775.975T11 16t-2-.312t-1.75-.888l1.45-1.45q.5.3 1.075.475T11 14q1.875 0 3.187-1.312T15.5 9.5t-1.312-3.187T11 5Q9.275 5 8.012 6.163T6.55 9.05L7.8 7.8l1.4 1.4l-3.7 3.7l-3.7-3.7l1.4-1.4l1.35 1.3q.15-2.575 2-4.337T11 3q2.725 0 4.613 1.888T17.5 9.5q0 1.05-.325 2.05T16.2 13.3l5.75 5.75z"></svg:path>`,
})
export class MaterialSymbolsYoutubeSearchedForIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsYoutubeTvIcon],svg[material-symbols-youtube-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20v-2h12v2Zm-2-3q-.825 0-1.412-.587Q2 15.825 2 15V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v9q0 .825-.587 1.413Q20.825 17 20 17Zm6-3l5.5-3.5L10 7Z"></svg:path>`,
})
export class MaterialSymbolsYoutubeTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZonePersonAlertIcon],svg[material-symbols-zone-person-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18v-3h2v3h3v2zm4.8-4l1-5.1l-1.8.7V15H6v-4.7l3.95-1.7q.875-.375 1.288-.487T12 8q.525 0 .975.275T13.7 9l1 1.6l.2.3q.1.15.225.275q-1.225.8-2.025 2.063T12.075 16zm4.7-8.5q-.825 0-1.412-.587T11.5 5.5t.588-1.412T13.5 3.5t1.413.588T15.5 5.5t-.587 1.413T13.5 7.5M2 5V2q0-.825.588-1.412T4 0h3v2H4v3zm18 0V2h-3V0h3q.825 0 1.413.588T22 2v3zm-1 17q-2.075 0-3.537-1.463T14 17t1.463-3.537T19 12t3.538 1.463T24 17t-1.463 3.538T19 22m-.5-4h1v-4h-1zm.5 2q.2 0 .35-.15t.15-.35t-.15-.35T19 19t-.35.15t-.15.35t.15.35t.35.15"></svg:path>`,
})
export class MaterialSymbolsZonePersonAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZonePersonIdleIcon],svg[material-symbols-zone-person-idle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.475 22.05l-7.275-7.3l-.4 1.95h-4l1-5.1l-1.8.7v3.4H6V11l2.4-1.025L.675 2.25L2.1.825l19.8 19.8zM4 20.7q-.825 0-1.412-.587T2 18.7v-3h2v3h3v2zm16-15v-3h-3v-2h3q.825 0 1.413.588T22 2.7v3zm-18 0v-3q0-.425.163-.788t.412-.637L4 2.725V5.7zm15 15v-2h2.975l1.425 1.4q-.25.275-.612.437T20 20.7zM6.825 2.7l-2-2H7v2zM22 17.875l-2-2V15.7h2zM13.5 8.2q-.825 0-1.412-.587T11.5 6.2t.588-1.412T13.5 4.2t1.413.588T15.5 6.2t-.587 1.413T13.5 8.2"></svg:path>`,
})
export class MaterialSymbolsZonePersonIdleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZonePersonUrgentIcon],svg[material-symbols-zone-person-urgent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6V3q0-.825.588-1.412T4 1h3v2H4v3zm5 15H4q-.825 0-1.412-.587T2 19v-3h2v3h3zM20 6V3h-3V1h3q.825 0 1.413.588T22 3v3zm-6.5 2.5q-.825 0-1.412-.587T11.5 6.5t.588-1.412T13.5 4.5t1.413.588T15.5 6.5t-.587 1.413T13.5 8.5M8.8 17l1-5.1l-1.8.7V16H6v-4.7l3.95-1.7q.875-.375 1.288-.487T12 9q.525 0 .975.275T13.7 10l1 1.6q.275.425.6.788t.75.662l-1.025 1.775q-.425-.275-.813-.612T13.5 13.5l-.7 3.5zm6.2 5q-.575 0-.862-.5t-.013-1l4-7q.325-.475.9-.525t.85.525l4 7q.325.5 0 1T23 22zm4-1q.2 0 .35-.15t.15-.35t-.15-.35T19 20t-.35.15t-.15.35t.15.35t.35.15m-.5-2h1v-4h-1z"></svg:path>`,
})
export class MaterialSymbolsZonePersonUrgentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomInIcon],svg[material-symbols-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14m-1-1.5v-2h-2v-2h2v-2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomInMapIcon],svg[material-symbols-zoom-in-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.9 21.5l-1.4-1.4L5.6 17H3v-2h6v6H7v-2.6zm16.2 0L17 18.4V21h-2v-6h6v2h-2.6l3.1 3.1zM3 9V7h2.6L2.5 3.9l1.4-1.4L7 5.6V3h2v6zm12 0V3h2v2.6l3.1-3.1l1.4 1.4L18.4 7H21v2z"></svg:path>`,
})
export class MaterialSymbolsZoomInMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomOutIcon],svg[material-symbols-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14M7 10.5v-2h5v2z"></svg:path>`,
})
export class MaterialSymbolsZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomOutMapIcon],svg[material-symbols-zoom-out-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-6h2v2.6l3.1-3.1l1.4 1.4L6.4 19H9v2zm12 0v-2h2.6l-3.1-3.1l1.4-1.4l3.1 3.1V15h2v6zM8.1 9.5L5 6.4V9H3V3h6v2H6.4l3.1 3.1zm7.8 0l-1.4-1.4L17.6 5H15V3h6v6h-2V6.4z"></svg:path>`,
})
export class MaterialSymbolsZoomOutMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
